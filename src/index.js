// require('dotenv').config({path: '../env'})
import express from 'express';
import {DB_NAME} from './constants.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connect_db from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: '../.env'
})

connect_db()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT: ${process.env.PORT}`)
    })

    app.on("error", (error) => {
        console.log("Err:", error)
        throw error;
    })
})
.catch((err) => {
    console.log("MongoDB connection failed!!!", err)
})

/*
const app = express()

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Err: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("Error: ", error)
        throw err
    }
})()

*/