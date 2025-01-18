import React from 'react'
import Notes from './components/Notes';
import Login from './components/Login';
import SignUp from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Notes />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
      </Router>
    </>
  )
}

export default App
