import express from 'express';
import dotenv from 'dotenv';

import connectToDatabase from './configs/db.config.js';
import routes from './routes/routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1', routes);

// Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`)

    await connectToDatabase();
});