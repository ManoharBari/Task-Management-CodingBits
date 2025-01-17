import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Dashboard from "./pages/Dashboard"; // Import Dashboard page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
