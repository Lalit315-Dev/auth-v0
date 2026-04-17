export interface IDBManager {
    connect(url: string): Promise<void>;
}
