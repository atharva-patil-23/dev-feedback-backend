import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        comment:{
            type:String,
            required:true
        },
        refreshToken:{
            type:String
        }

    },
    {timestamps:true})

userSchema.plugin(mongooseAggregatePaginate)

export const User = mongoose.model("User", userSchema)