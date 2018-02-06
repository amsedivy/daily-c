import ReactDOMServer from 'react-dom/server';
import Express from 'express';
import Index from '../client/view/browser';

import fetch from 'node-fetch';

global.fetch = fetch;

export default function (app) {
    const router = new Express.Router();

    router.get('/', (req, res) => {
        res.render('/view/index', {
            html: ReactDOMServer.renderToString(<Index />),
        });
    });

    return router;
}
