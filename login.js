import { Express } from "express";

import { engine } from 'express-handlebars'; 

import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";


mongoose.connect(process.env.mongoConnectionUrl)


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.listen(process.env.port, () => {
    console.log("Done :)");
})
