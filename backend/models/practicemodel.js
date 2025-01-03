import mdb from "mongoose";
var formschema=mdb.Schema({
    firstName:String,
    lastName:String,
    dob:String,
    phone:Number,
    college:String,
    department:String,
    bloodGroup:String,
    address:String
})
var formdata=mdb.model("forms",formschema)
export default formdata