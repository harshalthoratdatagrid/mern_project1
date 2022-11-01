const express = require('express');
const app = express();
const port = 8010;
app.get("/", (req,res)=>{
    res.status(201).json("server connected");
});
app.listen(port,()=>{
    console.log(`Server connected at port ${port}`);
});