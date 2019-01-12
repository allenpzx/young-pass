const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;
const reactRenderRouter = require(path.resolve(__dirname, './routes/react-render.js'));
const dotenv = require('dotenv');
dotenv.config();
app
.use(express.static(path.join(__dirname, '../build')))
.use(reactRenderRouter)
.listen(PORT, (error) => {
    if (error) {
        return console.log('something was wrong: ', error);
    }
    console.log(`Example app listening on port ${PORT}!`);
});