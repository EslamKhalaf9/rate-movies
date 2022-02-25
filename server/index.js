import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

import connect from './util/db.js';
connect();

import userRouter from './routes/user.js';

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

//Routes
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'hello world' });
});
app.use('/api/user', userRouter);

//notfound handler
app.use((req, res, next) => {
  res.status(404);
  throw new Error(`Route Not Found ${req.originalUrl}`);
});

//error Handler
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
