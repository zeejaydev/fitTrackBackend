import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

async function start() {
  // Load environment variables
  dotenv.config({
    path: "./.env",
  });

  // Create a new express application
  const app = express();
  app.use(express.json());
  
  app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!');
  });

  app.listen(3000, () => {
    console.log('Server is running on port ' + 3000);
  });
}

start();