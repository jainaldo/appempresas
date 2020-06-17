const { Router } = require('express');

const routes = new Router();

routes.get('/api/v1', (req, res) => {
  return res.send('ok');
});

module.exports = routes;
