const { Int32 } = require('mongodb');
const mongoose =require('mongoose');
const schema =mongoose.Schema;

const itemSchema = new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps: true });
const items= mongoose.model('items',itemSchema);
module.exports=items;
