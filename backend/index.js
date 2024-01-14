// require('dotenv').config();
const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const start = async () => {
    try {
        app.listen(5000, () => console.log('SERVER RUN'));
    } catch (e) {
        console.log(e);
    }
}

start();