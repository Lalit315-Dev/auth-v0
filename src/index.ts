import 'dotenv/config';
import server from './servers/expressServer.js';
import dbManager from './db/mongoose.js';

let { PORT, MONGO_URI } = process.env;

await dbManager.connect(MONGO_URI!);
server.run(Number(PORT) || 3000);
