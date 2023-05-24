import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser }) => {

  const navigate = useNavigate()

  const [userLogin,setUserLogin] = useState({
    mobileNumber: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUserLogin({...userLogin,[name]:value})
  }

  const login = async() => {
    const {mobileNumber,password} = userLogin;
    if( mobileNumber && password) {
      if(mobileNumber.length === 10) {
        await axios.post("http://localhost:5000/api/login",JSON.stringify(userLogin),{
          headers: {
            "Content-Type": "application/json",
          },
        })
              .then((res) => {
                alert(res.data.message)
                if(res.data.message === "Authentication successful") {
                  setLoginUser(res.data.user)
                  navigate("/")
                }
               
              })
              .catch(err => alert(err))
      }
      else {
        alert("Password and mobile pattern doesn't match")
      }
    }
    else {
      alert("Please Enter valid form data")
    }
  }

  return (
    <div className='login'>
        <h1>Login Form</h1>
        <input type='text' name='mobileNumber' value={userLogin.mobileNumber} onChange={handleChange} placeholder='Enter your registered mobile no.'></input>
        <input type='password' name='password' value={userLogin.password} onChange={handleChange} placeholder='Enter your password'></input>
        <div onClick={login} className='loginbutton'>Login</div>
        <div>or</div>
        <div onClick={() => navigate("/register")} className='registerbutton'>Register</div>
    </div>
  )
}

export default Login