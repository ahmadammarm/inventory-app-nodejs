/* eslint-disable prettier/prettier */
const express = require('express');
const dotenv = require('dotenv');
const { categoryRouter } = require('./routes/categoryRoute');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const server = express();
const port = process.env.PORT;

server.use(express.json());

// Category routes
server.use('/api/v1', categoryRouter);

server.use(errorHandler)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
