const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();

const redirects = [
  { from: '/product', to: '/products' }
];

app.prepare()
  .then(() => {
    const server = express();

    // Redirects
    redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
      server[method](from, (req, res) => {
        res.redirect(type, to);
      });
    });

    // Custom routes
    server.get('/product/:id', (req, res) => {
      const actualPage = '/product';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    // Default routing
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
