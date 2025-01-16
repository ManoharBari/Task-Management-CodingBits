import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Task=mongoose.model("Task",taskSchema);
export default Task