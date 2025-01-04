import mdb from 'mongoose'
var userSchema=mdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})

var user_scheme=mdb.model("users",userSchema)
export default user_scheme
