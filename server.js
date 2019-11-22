const express = require('express');
const app = express();
const port = 3010;
app.listen(port, () => {
    console.log('hello');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.statusMessage = 'MEssage from express';
    res.send('Message from express  ');
});

const nextFunction = (req, res, next) => {
    console.log('nextFunction', req.query.check);

    if (req.query.check === 'reqwithparams') {
        return res.send('Middle ware');
    }
    next();
}
app.use(nextFunction);

app.route('/subroute').get((req, res, next) => {
    console.log('subroute');
    res.send('after the middle ware sub route');
});

app.route('/subroutetwo').get((req, res, next) => {
    console.log('subroute');
    res.send('subroutetwo');
});
/**
 * Sub route three
 */
app.route('/subrouteThree').get((req, res, next) => {
    res.send('subrouteThree');
});