import * as express from 'express';
import * as advanced_math from './advanced_math';
import * as path from 'path';
const add1 = require('add-1-to-a-number');

let app: express.Application = express();
app.use('/', express.static(path.join(__dirname, 'static')));
const port: number = 3000;

app.get('/api/add/:number', function (request: express.Request, response: express.Response) {
    let parsed = parseInt(request.params['number']);
    let num: number | string = NaN;
    if (isNaN(parsed)) {
        num = advanced_math.add(request.params['number']);
    }
    else {
        num = advanced_math.add(parsed);
    }
    response.send({response: num});
});

app.listen(3000, function () {
    console.log(`Listening on ${port}`);
});
