import http from 'http'
import app from './server'

let currentApp = app;
const server = http.createServer(currentApp);

server.listen(process.env.PORT || 3000, () => {
    console.log(`API Served off port: ${server.address().port}`);
});

if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeListener('request', currentApp);
        server.on('request', app);
        currentApp = app;
    })
}