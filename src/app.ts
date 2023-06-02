import express, { Application, Request, Response, urlencoded } from "express";
import cors from 'cors';

const app: Application = express();
const port = 3000;

app.use(cors());

//parser

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;