import type { IServer } from "../interfaces/IServer.js";
import express from 'express';
import type { Express } from "express";

class ExpressServer implements IServer {
    private readonly app:Express
    constructor(app:Express) {
        this.app = app;
        this.addGlobalMiddlewares();
        this.addAppMiddlewares();
        this.addErrorMiddleware();
    }

    addGlobalMiddlewares(): void {
        this.app.use(express.json());
    }

    addAppMiddlewares(): void {
        
    }

    addErrorMiddleware(): void {
        
    }

    run(port: number): void {
        
    }
}

const server:IServer = new ExpressServer(express());

export default server;