import React from 'react'
// import Home from './components/Home'
// import Login from './components/Login';
// import SignUp from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import NoteProvider from './context/notes/NoteState';
// import UserProvider from './context/user/UserState';
// import { AlertProvider } from './context/alerts/alertContext';

function App() {
  return (
    <>
      <Router>
            <Navbar />
            <Routes>
              {/* <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} /> */}
            </Routes>
      </Router>
    </>
  )
}

export default App
