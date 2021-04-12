const express = require("express");

const app = express();

const customMiddleware = (req,res,next) =>{
    console.log("welcome to my middleware");
    next();
};

app.use(customMiddleware);

app.get("/",(req,res) =>{
    res.send("First request");
});

app.get("/users",(req,res) =>{

    let users = ["pelli","chany"]
    res.send(users);
});

app.post("/create-user", (req,res)=>{
    console.log(req);
});

app.listen(3000,()=>{
    console.log("Listening to 3000");
});