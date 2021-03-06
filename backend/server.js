const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
var path=require('path')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/public',express.static("C:/Users/riktam/Desktop/eventmngmnt/public"));
// console.log(path.join(__dirname+"/public"))
// app.use(express.static(path.join(__dirname + "public")))
// app.use('/public',express.static("/../..\\/public"));
const uri ="mongodb+srv://admin-prathyu:Prathyusha123@cluster0.l7q0r.mongodb.net/eventmgt";
 
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

// const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/userrouter');
const usersmainRouter = require('./routes/usermainrouter');
const usersubRouter = require('./routes/usersubrouter');
// app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/main', usersmainRouter);
app.use('/sub', usersubRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});