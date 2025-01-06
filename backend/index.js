import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import mdb from 'mongoose';
import User from '../backend/models/users.js'
import Form from '../backend/models/practicemodel.js'
import env from 'dotenv'
import cors from 'cors'

env.config()


const file=fileURLToPath(import.meta.url)
const __dirname=path.dirname(file)
const port=3001;
var app=express();

app.use(cors())
app.use(express.json())

// mdb.connect('mongodb://localhost:27017/KEC').then(()=>{
//     console.log("mongodb connection established");
// }).catch(()=>{
//     console.log("Check your connection string");
// })
mdb.connect(process.env.MONGO_URL).then(() => {//mongodb://localhost:27017
    console.log(process.env.MONGO_URL)
    console.log("MonoDB connection Successful");
}).catch(() => {
    console.log("check your connection string");
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

// app.post('/signup',(req,res)=>{
//     // var newUser=new User(req.body).save()
//     //var {firstName,lastName,email}=req.body;
//    // console.log(firstName,lastName,email)
//     try{
//         // var newUser=new User({
//         //     firstName:firstName,
//         //     lastName:lastName,
//         //     email:email
//         // }).save();
//         var newUser=new User(req.body).save();
//         console.log(req.body.password)
//         res.status(200).send("user added succesfully")

//     }catch(error){
//         console.log(error)
//     }
//     //res.send("hello")

// })
app.post('/signup', (req, res) => {
    console.log(req.body);
    var { firstName, lastName, email, password } = req.body
    console.log(firstName, lastName, email, password);
    try {
        // var newUser = new User({
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     password:password
        //})
        var newUser = new User(req.body)
        console.log(req.body.password);
        newUser.save()
        console.log("User Added Successfully");
        res.status(200).send("User  Added successfully")
    }
    catch (err) {
        console.log(err);
    }

})
app.post('/form',(req,res)=>{
    // var {firstName, lastName,
    //     dob,
    //     phone,
    //     college,
    //     department,
    //     bloodGroup,
    //     address}=req.body
console.log(firstName,
            lastName,
            dob,
            phone,
            college,
            department,
            bloodGroup,
            address)

try{
     var newFormUser=new Form(req.body).save()
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

app.post('/login',async(req,res)=>{
    var {email,password}=req.body

    try{
          var  existingUser= await User.findOne({email:email})
          console.log(existingUser)
          if(existingUser){
            if(existingUser.password!=password)
            res.json({message:"Invalid Credentials",isLoggedIn:false})
            else
            res.json({message:"Login Successfull",isLoggedIn:true})
          }
          else
          {
            res.json({message:"Login not successfull",isLoggedIn:false})
          }
         
    }catch(error){
          console.log(error)
    }
})


app.listen(port,()=>{
   // console.log(`Backend Server started\nUrl: http://localhost:${port}`)
    console.log("Backend running successly")

})