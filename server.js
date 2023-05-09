import { Express } from "express";

// import { engine } from 'express-handlebars';

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(process.env.mongoConnectionUrl);

const app = express();
//importing bcrypt package
const bcrypt = require("bcryppt");
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

app.use(express.urlencoded({extended: false}));

//routes

app.get("./temlates/Login.html", (req, res) => {
  req.render("./temlates/Login.html");
});

app.listen(process.env.port, () => {
  console.log("loaded :)");
});
