/// 1.import the express
const express =require('express')
const rest=require('./models')
const cors =require('cors')


// 2

const app=new express()

// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// 3.create the api

// api to add data to db
app.post('/add',async(req,res)=>{
    const result=await new rest(req.body);
    result.save();
    res.send("data added")
})
// api to view data from db
app.get('/view',async(req,res)=>{
    let result=await rest.find();
    res.json(result);
})


app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    rest.findOne({email :email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("no data existed")
        }
       
})
       
})

// delete
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id =req.params.id
    await EmployeeModel.findByIdAndDelete(id);
    res.send("Deleted")
})



// 4.create a localhost port
app.listen(3000,()=>{
    console.log("port is running at 8080")
})