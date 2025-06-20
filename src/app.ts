import express,{Application,Request,Response} from 'express';
import { bookroutes } from './app/controllers/book.controller';



const app: Application = express();

app.use(express.json())

app.use("/api/books",bookroutes)



app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});


export default app;

