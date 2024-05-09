import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const [input, setInput] = useState({
    username : "",
    email : "",
    password : "",
  })
  const navigate = useNavigate()

  const HandleRegister = ()=>{
    axios.post("http://localhost:3000/register", input).then(result => console.log(result)).catch(err => console.log(err))
    navigate('/login')
  }

  return (
    <div className="register">
    <h1>Register</h1>
    <input className="inputBox" type="text" placeholder="Enter Username"
    name='username'
    value={input.username}
    onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
    />
    <input className="inputBox" type="text" placeholder="Enter Email"
    name='email'
    value={input.email}
    onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
    />
    <input className="inputBox" type="text" placeholder="Enter password"
    name='password'
    value={input.passowrd}
    onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
    />
    <button className="appButton" type="button" onClick={HandleRegister}>Register</button>
</div>
  )
}

export default Register