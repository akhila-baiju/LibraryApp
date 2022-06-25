
const mongoose =require('mongoose');
//mongoose.connect("mongodb://localhost:27017/LibraryApp");
mongoose.connect("mongodb+srv://akhila:akhila123@cluster0.upuqqlq.mongodb.net/test");
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    bookURL : String,
    title:String,
    content:String,
    authorURL:String
    
});
var Bookdata = mongoose.model('Book',BookSchema);
module.exports =Bookdata;