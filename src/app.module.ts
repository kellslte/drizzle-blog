import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createServer } from "http";
import errorHandler from "./lib/errorHandler";
import { HttpStatus } from "./lib/httpStatus";
import ConfigModule from "./config.module";

// Setup Application Basics
const app = express();
const server = createServer(app);

// Configure Config
app.set('config', new ConfigModule());

// Configure Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

// Configure Routes

// Catch all route
app.use('*', (req, res) => {
    const url = req.originalUrl;

    res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: `The requested route: ${url}, does not exist on this server`,
    })
});

// Global Error Handler
app.use(errorHandler);

// Export defaults
export { app, server };
