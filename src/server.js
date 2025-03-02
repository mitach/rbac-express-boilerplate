import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import connectToDatabase from './configs/db.config.js';
import { generalLimiter } from './middlewares/rateLimiter.middleware.js';
import routes from './routes/routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(generalLimiter);

// Routes
app.use('/api/v1', routes);

// Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`)

    await connectToDatabase();
});