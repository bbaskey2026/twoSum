const express=require('express');
const app=express();
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'))
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});