const express = require("express");
const app= express();
const PORT=5000;
const checkTime = require('./middleware/checktime');

/*//run "nodemon" (or "npx nodemon nameOfAppFile.js"
//to avoid version conflict or compatibility issues)
//for watching the changes*/


//checktime_middleware
app.use(checkTime);

//test server

// app.get("/",(req,res)=>{
// res.writeHeader(200,{"Content-Type":"text/html"})
// res.write("Test server response");
// res.end();
// });





//starts a server and listens for incoming requests on a specified port
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`server running on http://localhost:${PORT}`)
})

//use pug templete
app.set("view engine","pug");
app.set("views","./views");

//get home page
app.get("/",(req,res)=>{
    res.render("home")
})
//get service page
app.get("/service",(req,res)=>{
    res.render("service")
})
//get contact page
app.get("/contact",(req,res)=>{
    res.render("contact")
})
