import mongoose from 'mongoose';

const testSchema = mongoose.Schema({

    pickedOne:String,
    pickedTwo:String,
    pickedThree:String,
    pickedFour:String,
    pickedFive:String,
    currentusername:{
        type:String,
        unique:true
    },
})


const test = mongoose.model('tests', testSchema);

export default test;