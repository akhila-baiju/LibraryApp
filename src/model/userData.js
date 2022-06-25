const mongoose =require('mongoose');
//mongoose.connect("mongodb://localhost:27017/LibraryApp");
mongoose.connect("mongodb+srv://akhila:akhila123@cluster0.upuqqlq.mongodb.net/test");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    fName : String,
    lName:String,
    mNumber:Number,
    emailId:String,
    password:String
});
var Userdata = mongoose.model('User',UserSchema);
module.exports =Userdata;

