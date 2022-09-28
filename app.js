//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

// data for pages
const AboutPageData = "";
const ContactPageData = "";

// app setup
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

// global vars to store data
let postData = []


app.get("/", (req, res) => {
    res.render("index", {PostData : postData});
})
app.get("/about", (req, res) => {
    res.render("about", {AboutData: AboutPageData});
})
app.get("/contact", (req, res) => {
    res.render("contact", {ContactData: ContactPageData});
})
app.get("/compose", (req, res) => {
    res.render("compose");
})

app.post("/compose", (req, res) => {
    var post = {
        title:req.body.DataTitle, 
        data:req.body.DataContent
    };
    postData.push(post);
    res.redirect("/")
})










app.listen(3000, ()=>{
    console.log("App working at port 3000");
})