import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import roleRoute from './routes/role.js'


const app=express();
dotenv.config()
//DB COnnection
const connectMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Database")
    } catch (error){
        throw error;
    }
}


// app.use("/api/role",(req,res,next)=>{

// })

app.use("/api/role",roleRoute)






// app.use('/api/login', (req,res)=>{
//     return res.send("<h1>Login is Successful!!!</h1>")
// })

// app.use('/api/register', (req,res)=>{
//     return res.send("<h1>Registration is Successful!!!</h1>")
// })

// app.use('/', (req,res)=>{
//     return res.send("<h1>Hello, Welcome to the Project</h1>")
// })

app.listen(8801, ()=>{
    connectMongoDB();
    console.log("Connected to backend");
})