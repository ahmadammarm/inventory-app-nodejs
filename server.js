const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const server = express();
const port = process.env.PORT;

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
