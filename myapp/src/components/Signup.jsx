import { AccountCircle } from '@mui/icons-material'
import { InputAdornment, TextField, Typography ,Button} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Signup = () => {
  var[inputs,setInputs] = useState({
    email:"",
    name:"",
    password:"",
    
})
const navigate=useNavigate()
 
  const inputHandler = (e)=>{
    const {name,value}=e.target
    setInputs((prevData)=>({...prevData,[name]:value}))
    console.log(inputs)
 }
 const addHandler = ()=>{
  console.log(inputs.email)
  console.log("button clicked");
  axios.post("http://localhost:3000/add",inputs)
  .then((result)=>{
    console.log(result.data)
    alert(result.data)
    navigate('/login')
  })
  .catch((err)=>console.log(err))
 }
    
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography  variant='h3'> Register</Typography><br />
        <TextField id="filled-basic" label="Email" variant="filled" name='email' type='email' value={inputs.email} onChange={inputHandler} />
        <br /><br /><br />
        <TextField
        id="input-with-icon-textfield"
        label="Name"
        type='text'
        name='name'
        value={inputs.name}
        onChange={inputHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
          
        }}
        variant="standard"
      />
      <br /><br />
      <TextField
          id="filled-password-input"
          label="Password"
          name='password'
          value={inputs.password}
          onChange={inputHandler}
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      <br />
      <br />
        <Button variant="contained" onClick={addHandler}>submit</Button>
      
    </div>
  )
}