const express=require("express");
const {ServerConfig, Queue}=require("./config");
const apiRoutes=require('./routes');
const {CRONS}=require('./utils/common');


const app=express();
// console.log(process.env);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    CRONS.scheduleCrons();
    await Queue.connectQueue();
});
