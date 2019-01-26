require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const compress = require('compression');
const cors = require('cors');
const { Client } = require('pg');

const client = new Client({ connectionString: process.env.DATABASE_URL });

const app = express();

// Log all requests. Skip logging during testing.
app.use(
  morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
    skip: () => process.env.NODE_ENV === 'test',
  }),
);

// Boilerplate configuration
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  }),
);
app.use(compress());
app.use(express.json());

// ROUTES HERE
app.get('/', async (req, res, next) => {
  return res.json({ hello: 'world' });
});

// Custom 404 Not Found route handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

if (require.main === module) {
  app
    .listen(process.env.PORT || 8080, function() {
      console.info(`Server listening on ${this.address().port}`);
    })
    .on('error', err => {
      console.error(err);
    });
}

module.exports = client;
