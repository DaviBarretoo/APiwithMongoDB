import express,{Application} from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/Userroutes";

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api.kfhn6at.mongodb.net/?retryWrites=true&w=majority&appName=api`).then(()=>{
    console.log ("Conectamos ao moongoDB")
    app.use("/",router)
    app.listen(3002, ()=>{
        console.log(`conectamos a porta http://localhost:3002`)
    })
}).catch((err)=>console.log(err))

