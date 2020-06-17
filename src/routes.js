import { Router } from 'express';

const routes = new Router();

routes.get('/api/v1', (req, res) => {
  return res.send('ok');
});

export default routes;
