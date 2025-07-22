import express from 'express';
import {connectDB} from './DB/connectDB.js';//use .js when u import local files
const app=express();

const port=process.env.PORT||2000

app.get('/',(req,res)=>{
    console.log("hello world");
    res.send("hello")
});
 

app.listen( port,()=>{
  connectDB();
    console.log("server starting on port",port)
    

})