import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App