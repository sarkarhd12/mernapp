const express=require('express');
const app=express();
const mongoDB=require("./db");
const cors=require("cors")
app.use(cors())
app.use(express.json())
mongoDB();

app.use(cors());


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})





app.get('/',(req,res)=>{
    res.send("hi")
})

app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/OrderData'))

app.listen(5000,()=>{
    console.log("app running backend")
})