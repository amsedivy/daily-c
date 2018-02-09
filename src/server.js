import Express from 'express';
import { renderToString } from 'react-dom/server';
import dailyC from './server/app';
import template from './client/view/layout/template';

const port = process.env.PORT || 8081;
const server = new Express();

server.use('/assets', Express.static('assets'));

server.get('/', (req, res) => {
  const appString = renderToString(dailyC);

  res.send(template({
    body: appString,
    title: 'daily-c',
  }));
});


server.listen(port);
