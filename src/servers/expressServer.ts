import type { IServer } from '../interfaces/IServer.js';
import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';

class ExpressServer implements IServer {
    private readonly app: Express;
    constructor(app: Express) {
        this.app = app;
        this.addGlobalMiddlewares();
        this.addAppMiddlewares();
        this.addErrorMiddleware();
    }

    addGlobalMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    addAppMiddlewares(): void {}

    addErrorMiddleware(): void {
        this.app.use(
            (err: Error, req: Request, res: Response, next: NextFunction) => {
                // TODO: replace this with ApiResponse utility for consistent response structure
                res.status(500).json('Internal server error');
            }
        );
    }

    run(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server up and listening on PORT: ${port}`);
        });
    }
}

const server: IServer = new ExpressServer(express());

export default server;
