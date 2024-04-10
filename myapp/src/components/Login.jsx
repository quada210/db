import React from 'react'
import { TextField, Typography ,Button} from '@mui/material'

import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
 const [email,setEmail]= useState()
const  [password,setPassword]=useState()
const navigate=useNavigate()




  const addHandler = (e)=>{

    e.preventDefault()
    console.log(email)
    
    
    axios.post("http://localhost:3000/login",{email,password})
    .then((result)=>{
      console.log(result.data)
      { alert(result.data)}
      if(result.data === "success"){
        navigate('/home')
      }
    })
    .catch((err)=>console.log(err))
   }
      

  return (
    <div> 
    <br /><br /><br /><br /><br />
    <Typography  variant='h3'> Register</Typography><br />
    <TextField id="filled-basic" label="Email" variant="filled" name='email' type='email' onChange={(e)=> setEmail(e.target.value)}   />
    <br /><br /><br />
    
  <br /><br />
  <TextField
      id="filled-password-input"
      label="Password"
      name='password'
      onChange={(e)=> setPassword(e.target.value)}
     
      
    
     
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
