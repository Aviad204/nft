import express, { Application, Request, Response } from "express";
import expressLayouts from 'express-ejs-layouts';
import { port, publicDirectoryPath } from "./constants";
import path from 'path';
import accountsRouter from "./server/routes/accountsRouter"

const app: Application = express();

// EJS setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');

// Middlewares
app.use(express.static("public"))
app.use(expressLayouts);
app.use(express.static(publicDirectoryPath));

// Routers
app.use('/', accountsRouter);

// Server startup
app.listen(port, () => {
    console.log(`Server is live on ${port}`);
});