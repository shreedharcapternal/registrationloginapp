import './App.css';
import HomePage from './components/home/HomePage';
import Login from './components/login/Login';
import Registration from './components/register/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user && user.id ? <HomePage user={user} setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />        
          <Route path="/register" element={<Registration/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
