import Koa from 'koa';
import Route from '@koa/router';
import serve from 'koa-static';

// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path'

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { RouteList } from '../shared/Routes';
import { Provider } from 'react-redux';
import { createServerStore } from '../shared/store';
import App from '../shared/App';

const app = new Koa();
const router = new Route();

const fileResove = (file) => path.resolve(path.join(__dirname, file));

const template = fs.readFileSync(fileResove('assets/index.html'), 'utf8');

const templating = (template) => {
  return (props) =>
    template.replace(/<!--(\s\S)*?>-->/g, (_, key) => {
      props[key.trim()];
    });
};

router.get(['/', '/about'], async (ctx) => {
  const store = createServerStore();

  const promises = RouteList.map((routes) => {
    if (routes.path === ctx.req.url && routes.element.type.loadData) {
      return routes.element.type.loadData(store);
    }
  }).filter(Boolean);

  await Promise.all(promises).then((data) => {
    const render = templating(template);

    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    ctx.body = render({
      html,
      store: `<script>window.REDUX_STORE = ${JSON.stringify(store.getState())}</script>`,
    });

    // ctx.body = `
    //   <!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>React-ssr</title>
    //   </head>
    //   <body>

    //     <div id="app">${html}</div>
    //     <script src="bundle.js"></script>
    //   </body>
    //   </html>
    // `;
  });
});

router.get('/getData', (ctx) => {
  ctx.body = {
    code: 0,
    data: '后端返回数据',
  };
});

app.use(serve('assets'));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('listening server http://localhost:3000');
});
