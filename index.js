const express = require("express");

var bodyParser  = require('body-parser');

const app = express();
const view = ("views","./views");
app.set('view engine', 'ejs');
const port = 5000;

app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

let arr = [];

for(let i = 0; i<3; i++){
    arr.push({
        name :"Krishan",
        email:"somukp@gmail.com",
        age: 24
    });
}
console.log(arr);

app.get("/",(req,res)=>{
    res.render("user.ejs",{user:arr});
})

app.get ("/form",(req,res)=>{
    res.render("form.ejs");
})
app.post ("/add/user",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
})



app.listen(port,(req,res)=>{
    console.log("Server Running");
})