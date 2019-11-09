const express = require('express');
const app = express();
const port = 3010;
app.listen(port, ()=> {
    console.log('hello');
});

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.statusMessage = 'MEssage from express';
    res.send('Message from express');
})