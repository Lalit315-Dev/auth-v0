export interface IServer {
    addGlobalMiddlewares(): void;
    addAppMiddlewares(): void;
    addErrorMiddleware(): void;
    run(port: number): void;
}