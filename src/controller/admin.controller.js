import { asyncHandler } from "../utils/asyncHandler.js"


const registerAdmin = asyncHandler(async(req,res) => {


    const{name , username , email, password } = req.body
    console.log("email:",email)
})

export {registerAdmin}