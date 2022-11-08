import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
// import all common configs
import './src/config/config.js';
// routes imports
import teacherRouter from './src/routes/teacher.routes.js';
import sequelize from './src/config/sequelize.js';

const app = express();

app.use(
  rateLimit({
    windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
    max: 5,
    message: 'You exceeded 100 requests in 12 hour limit!',
    headers: true,
  }),
);

sequelize.sync();

// set security HTTP headers
app.use(helmet());

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

// Prevent from harmful code injections by request sanitize.
app.use(xss());

// enable cors
app.use(cors());
app.options('*', cors());

// version 1 api endpoints
app.use('/api/teachers', teacherRouter);
// app.use('/users', usersRouter);

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Serve at http://localhost:${port}`));

export default app;
