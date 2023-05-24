import React, { useState } from 'react'
import "./Registration.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Registration = () => {

  const navigate = useNavigate()

    const [userRegister,setUserRegister] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password_hash: "",
        reenterpassword: "",
        profilePic: null
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUserRegister({
        ...userRegister,
        [name]: value
    })
}



  const register = async() => {
    const {firstName,lastName,mobileNumber,password_hash,reenterpassword} = userRegister;
    if(firstName && lastName && mobileNumber && password_hash) {
      if(mobileNumber.length === 10 && password_hash === reenterpassword) {
        await axios.post("http://localhost:5000/api/register",JSON.stringify(userRegister),{
          headers: {
            "Content-Type": "application/json",
          },
        })
              .then((res) => {
                alert(res.data.message)
                setUserRegister({})
                navigate("/login")

              })
              .catch(err => alert(err.message))
      }
      else {
        alert("Password and mobile combination doesn't match")
      }
    }
    else {
      alert("Please Enter valid form data")
    }
    
  }


  return (
    <div className="register">
        <h1>Registration Form</h1>
        <input type='text' name='firstName' value={userRegister.firstName} onChange={handleChange} placeholder='Enter your firstName' />
        <input type='text' name='lastName' value={userRegister.lastName} onChange={handleChange}  placeholder='Enter your lastName' />
        <input type='text' name='mobileNumber' value={userRegister.mobileNumber} onChange={handleChange} placeholder='Enter your mobile no.' />
        <input type='password' name='password_hash' value={userRegister.password_hash} onChange={handleChange}  placeholder='Enter your password' />
        <input type='password' name='reenterpassword' value={userRegister.reenterpassword} onChange={handleChange}  placeholder='Re-Enter Password' />
        <input type="file" name='profilePic' accept="image/*" value={userRegister.profilePic} onChange={handleChange} />
        <div onClick={register} className='registerbutton'>Register</div>
        <div>or</div>
        <div onClick={() => navigate("/login")} className='loginbutton'>Login</div>
    </div>
  )
}

export default Registration