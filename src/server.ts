import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import { router } from './router'
import cors from 'cors';
import path from 'path';

const app = express()
const port = process.env.PORT || 3333

app.use(express.json());
app.use(cors());
app.use(router);

app.use(
    '/files', 
    express.static(
        path.resolve(
            __dirname, 
            '..', 
            'tmp'
        )
    )
);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof Error) {
        return res.status(400).json({
            error: error.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});

app.listen(port, ()=> console.log('-- SERVER ON --'));