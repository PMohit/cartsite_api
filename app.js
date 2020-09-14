const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const app = express();
const userRoutes = require('./routes/user')
//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useCreateIndex:true
}).then(() => console.log("DB Connected"));

app.use("/api",userRoutes);

const port = process.env.PORT || 8000;

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});