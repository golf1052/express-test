import * as express from 'express';
const add1 = require('add-1-to-a-number');

let app: express.Application = express();
const port: number = 3000;

app.get('/', function (request: express.Request, response: express.Response) {
    response.send('hello world');
});

app.get('/api/add/:number', function (request: express.Request, response: express.Response) {
    var num: number = add1(parseInt(request.params['number']));
    response.send({response: num});
});

app.listen(3000, function () {
    console.log(`Listening on ${port}`);
});
