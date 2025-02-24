const express=require("express");
const app=express();
app.use(express.json());
const PORT=4010;

app.get('/',(req,res)=>{
    res.send("Hello Everyone")
});


const users=[
    {user_id:1,username:"Alice",age:25,email:"alice@example.com"},
    {user_id:2,username:"bob",age:30,email:"bob@example.com"},
    {user_id:3,username:"charlie",age:28,email:"charlie@example.com"},

];

app.get('/user/:id',(req,res)=>{
    try{
    const details=users.find(b=>b.user_id==req.params.id)
    if(!details){
        res.status(400).json({message:"User Parameter can't be empty"})
    }
    res.status(200).json({message:"User found",data:details});
}
catch(err){
    res.status(500).json({message:"User not found"})
}
})


app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`));