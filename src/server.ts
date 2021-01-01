import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import initDatabase from './database';
import type { Application, Request, Response } from 'express';

dotenv.config();
initDatabase();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_: Request, res: Response) => res.json('OK'));

app.listen(PORT, () =>
  console.log(`⚡ Server is running here 👉 http://localhost:${PORT}`),
);
