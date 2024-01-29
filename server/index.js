// import path from 'path'
import express  from 'express'
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/userRouter.js';
import photosRouter from './routes/photosRouter.js';
import stripeRouter from './routes/stripeRouter.js';

const app = express();

const port = process.env.PORT || 3001;

let corsOptions = {
  allowedHeaders: ['*'],
  maxAge: 10
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', photosRouter);
app.use('/auth', userRouter);
app.use('/payment', stripeRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})