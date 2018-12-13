const express = require('express');
const app = express();
const port = 9090;

app.use(express.static('build'));

app.use(function (req, res){
    console.log('req.url: ', req.url)

    // res.send('/build/')
})

app.listen(port, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${port}!`);
});