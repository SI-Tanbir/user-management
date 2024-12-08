const express =require('express')
const cors = require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const port =process.env.PORT || 5000;


const user =[
    {id:1,name:'sabana',email:'sabana@gmail.com'},
    {id:2,name:'sabona',email:'sabona@gmail.com'},
    {id:3,name:'sabila',email:'sabila@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send("user Management sever is running")
}) 

app.get('/user',(req,res)=>{
    res.send(user)
    // console.log(req)
})

app.post('/user',(req,res)=>{
    console.log('post api hitting')
    console.log(req.body)
    const newUser=req.body;
    newUser.id=user.length +1;
    user.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{

    console.log(`server is running on Port :${port}`)
})



