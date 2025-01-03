import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import mdb from 'mongoose';
import User from '../backend/models/users.js'
import Form from '../backend/models/practicemodel.js'

const file=fileURLToPath(import.meta.url)
const __dirname=path.dirname(file)
const port=3001;
var app=express();

app.use(express.json())

mdb.connect('mongodb://localhost:27017/KEC').then(()=>{
    console.log("mongodb connection established");
}).catch(()=>{
    console.log("Check your connection string");
})



app.get('/',(req,res)=>{
    res.send("Welcome to bakend server")
})
app.get('/hell',(req,res)=>{
    res.send({server:"Welcome",port:port})
})
app.get('/static',(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/signup',(req,res)=>{
    var {firstName,lastName,email}=req.body;
    console.log(firstName,lastName,email)
    try{
        var newUser=new User({
            firstName:firstName,
            lastName:lastName,
            email:email
        }).save();
        console.log("user added")
        res.status(200).send("user added succesfully")

    }catch(error){
        console.log(error)
    }
    //res.send("hello")
})
app.post('/form',(req,res)=>{
    var {firstName, lastName,
        dob,
        phone,
        college,
        department,
        bloodGroup,
        address}=req.body
console.log(firstName,
            lastName,
            dob,
            phone,
            college,
            department,
            bloodGroup,
            address)

try{
     var newFormUser=new Form({
        firstName:firstName,lastName:lastName, dob:dob,
        phone:phone, college:college,
        department:department,
        bloodGroup:bloodGroup,
        address:address
     }).save()
     console.log("Form user added successfully");
     res.status(200).send("form User added");

}catch(error){
    console.log(error)
}
})

app.get('/getsignup',async(req,res)=>{
   
    try{
        var allsignuprecords=await User.find()
        res.json(allsignuprecords)
    }catch(error){
        console.log(error)
    }
})

app.listen(port,()=>{
   // console.log(`Backend Server started\nUrl: http://localhost:${port}`)
    console.log("Backend running successly")

})