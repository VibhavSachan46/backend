// require('dotenv').config()

import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
const app = express()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running at port ${process.env.PORT}`);
    })
})
