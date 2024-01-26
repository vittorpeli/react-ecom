// import path from 'path'
import express  from 'express'
import router from './router.js';
import cors from 'cors';

const app = express();

const port = 3001;

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})