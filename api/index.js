require("dotenv").config()
const express = require("express");
const cors = require("cors")
const route = require("../api/src/routes/routes");

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    next();
});

app.use(express.json());
app.use(route);

app.listen(3000);