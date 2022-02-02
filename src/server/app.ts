const Koa = require('koa');
const Route = require('@koa/router');
const serve = require('koa-static');

const app = new Koa();
const router = new Route();

router.get('/', (ctx) => {
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
      <div id="app"></div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `;
});

app.use(serve('dist'))

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('listening server http://localhost:3000');
});
