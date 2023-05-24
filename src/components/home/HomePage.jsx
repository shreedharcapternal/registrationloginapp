import React from 'react'
import "./HomePage.css"
import { useNavigate } from "react-router-dom"

const HomePage = ({user,setLoginUser}) => {
  const navigate = useNavigate()

  const logout = () => {
    setLoginUser({})
    navigate("/login") 
  }

  return (
    <div className='homepage'>
        <h1>Hello HomePage</h1>
        <h2>Good Morning, {user.firstName}!</h2>
        <p>Mobile Number: {user.mobileNumber}</p>
        <button onClick={logout} className='button'>Logout</button>
    </div>
  )
}

export default HomePage