import type { IDBManager } from '../interfaces/IDBManager.js';
import mongoose from 'mongoose';

class MongoDB implements IDBManager {
    async connect(url: string): Promise<void> {
        try {
            await mongoose.connect(url);
            console.log(
                `Voila ! DB up and running at host: ${mongoose.connection.host}`
            );
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('Cannot connect to DB!');
        }
    }
}

const dbManager: IDBManager = new MongoDB();

export default dbManager;
