require('reflect-metadata');
import express, { Request, Response} from 'express'
import { router } from './routes';
import cors from 'cors';

const server = express();

server.use(cors())

server.use(express.json())
server.use(router)

server.get('/',(request: Request, response: Response) => {
    return response.status(200).json({ message: 'Acessou e retornou tudo certo'})
})


server.listen(5000, () => {
    console.log('Online')
})

