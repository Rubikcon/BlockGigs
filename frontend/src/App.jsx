import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";
import Emailcode from "./components/emailCode/emailcode";
import SignupTrue from "./components/SignupTrue/SignupTrue";
import SigninTrue from "./components/SigninTrue/SigninTrue";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Persona from "./components/Persona/Persona";
import TalentForm from "./components/TalentForm/TalentForm";
import ClientForm from "./components/ClientForm/ClientForm";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
import TalentDashboard from "./components/TalentDashboard/TalentDashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/emailcode" element={<Emailcode />} />
        <Route path="/SignupTrue" element={<SignupTrue />} />
        <Route path="/SigninTrue" element={<SigninTrue />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="ResetPassword" element={<ResetPassword />} />
        <Route path="Persona" element={<Persona />} />
        <Route path="/TalentForm" element={<TalentForm />} />
        <Route path="/ClientForm" element={<ClientForm />} />
        <Route path="/ClientDashboard" element={<ClientDashboard />} />
        <Route path="TalentDashboard" element={<TalentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
