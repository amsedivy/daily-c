import Express from 'express';
import daily_c from './server/app';

const port = process.env.PORT || 8081;
const app = new Express();
const log = console;

app.use('/', daily_c(app));

const listener = app.listen(port, '0.0.0.0', () => {
    let host = listener.address().address;
    if (host === '::') {
        host = 'localhost';
    }

    log.info(`START UP http://${host}${port === 80 ? '' : `:${port}`}`);
});

export default app;
