import mongoose , {Schema} from "mongoose";

const adminSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        username:{
            type:String,
            requried:true,
            lowecase:true,
            trim:true,
            index:true,
            unique:true
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        refreshToken:{
            type:String
        }

    },{timestamps:true})