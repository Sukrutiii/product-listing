require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const userRouter = require('./routes/userRoute')
const problemRouter = require('./routes/productRoute')

app.use(express.json())
app.use(cors())

app.use('/user',userRouter)
app.use('/product',problemRouter)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server is  running")
})
const URL = process.env.MONGO_URL
// async function  connectMongo (){
//     try {
//         await mongoose.connect(URI);
//         console.log("Databse connected");
//     } catch(e){
//         console.log(e.error);
//     }
// }

// connectMongo();

mongoose.connect(URL).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
