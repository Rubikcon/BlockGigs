import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Signin from './components/signin/signin';
import Emailcode from './components/emailCode/emailcode';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/emailcode' element={<Emailcode />} />
      </Routes>
    </Router>
  )
}

export default App