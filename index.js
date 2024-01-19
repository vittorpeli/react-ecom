// import path from 'path'
import express  from 'express'
import router from './server/router.js';

const app = express();

const port = 3001;

app.use(express.json());

app.use('/api', router);

app.use(express.static('dist/src'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})