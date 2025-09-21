import {dotenv} from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import path from 'path';

const app = express();

// Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
)

// Middleware 
app.use(app.json());


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
