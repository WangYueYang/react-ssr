import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { createServerStore } from '../../src1/shared/store';
import React from 'react';
import App from '../shared/app';
import { routeList } from '../shared/routes';

const app = new Koa();
const router = new Router();

router.get(['/', '/about'],async (ctx) => {
  const store = createServerStore();

  const promises = routeList.map((routes) => {
    if (routes.path === ctx.req.url && routes.element.type.getData) {
      return routes.element.type.getData(store);
    }
  }).filter(Boolean);

  await Promise.all(promises).then((data) => {
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    ctx.body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>React-ssr</title>
        </head>
        <body>
          <script>
            window.REDUX_STORE = ${JSON.stringify(store.getState())}
          </script>
          <div id="app">${html}</div>
          <script src="bundle.js"></script>
        </body>
        </html>
      `;
  });
});

router.get('/getData', (ctx) => {
  ctx.body = {
    code: 200,
    data: '哈哈哈哈哈哈哈哈哈哈哈哈',
  };
});

app.use(serve('assets'));
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
