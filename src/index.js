const express=require("express");
const {PORT}=require("./config");
const apiRoutes=require('./routes')

const app=express();
// console.log(process.env);

app.use('/api',apiRoutes);
app.listen(PORT,()=>{
    console.log(`Successfully started the server on PORT: ${PORT}`);
});