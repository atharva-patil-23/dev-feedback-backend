import { app } from "./app.js";
import dotenv from "dotenv";
import connect_db from "./database/db.js";


dotenv.config({
    path:"./.env"
})

const PORT = process.env.PORT || 8000;

let feedbacks = []
let nextId = 1

app.post("/feedback",(req,res) => {
    const {name , email , comment} = req.body
    const newFeedback = { id:nextId++, name , email , comment}
    feedbacks.push(newFeedback)
    return res.status(200).send("thanks for the feedback")
})

app.get("/feedback",(req,res) => {
    return res.status(201).send(feedbacks)
})

app.get("/feedback/:id",(req,res) => {
    const comment = feedbacks.find(c => c.id === parseInt(req.params.id))

    if(!comment){
        console.log("feedback not found")
    }

    return res.status(202).send(comment)
})

connect_db()
.then(() => {
    app.listen(PORT ,() => {
        console.log(`server is listening at ${PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection error",err)
})