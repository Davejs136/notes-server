import express from 'express';
import type { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_: Request, res: Response) => res.json('OK'));

app.listen(PORT, () => console.log(`⚡ Server is running here 👉 http://localhost:${PORT}`));
