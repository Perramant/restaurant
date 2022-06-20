const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://TESTWeb:test@cluster0.zumn4.mongodb.net/5Pains2Poissons?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//EJS
app.set("view engine","ejs");

//BODY PARSER
app.use(express.static("public"));

// MODELS
const User = require("./models/user.js");

//
const methodOverride = require("method-override");
const flash = require("connect-flash");

app.get("/",function(req,res){
    res.render("index");
})

app.get("/inscription",function(req,res){
    res.render("inscription");
});
app.post("/inscription",function(req,res){
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    User.create(user,function(err){
        if(err){
            console.log(err);
        }else{
            res.render("index");
        }
    })
})












app.listen(3000,function(req,res){
    console.log("tout marche bien!")
});