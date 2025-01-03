import express from 'express';
const port=3001;
var app=express();
app.get('/',(req,res)=>{
    res.send("Welcome to bakend server")
})
app.get('/hell',(req,res)=>{
    res.send({server:"Welcome",port:port})
})
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/swath/Desktop/Mern-Day3/backend/index.html')
})
app.listen(port,()=>{
    console.log(`Backend Server started\nUrl: http://localhost:${port}`)
    //console.log("Backend running successly")

})