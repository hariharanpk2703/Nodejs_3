const express = require('express')
const app = express();

const middleware = (req,res,next)=>{
    // console.log("hi");
    console.log("middleware1")
    next();
}


app.get("/",middleware,(req,res)=>{
    res.send("<h1> MainPage with Middleware 1 </h1>")
})


const middleware2 = (req,res,next)=>{
    // console.log("hi");
    // res.send("middleware2")
    console.log("middleware2");
    next();
}

app.use(middleware2)

app.get("/page1",middleware,(req,res,next)=>{
    res.send("<h1>Page1 with Middleware 1 & 2</h1>");
    next();
    // npm
})

app.get("/page2",(req,res,next)=>{
    res.send("<h1>Page2 with Middleware 2</h1>");
    next();
})

app.get("/page3",(req,res,next)=>{
    res.send("<h1>Page3 with Middleware 2</h1>");
    next();
})

app.listen(4040);