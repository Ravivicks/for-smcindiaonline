import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({

    fname:String,
    lname:String,
    username:String,
    email:{
        type:String,
        unique:true,
    },
    mobile:Number,
    password:String,
    
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'members');

const member = mongoose.model('members', userSchema);

export default member;