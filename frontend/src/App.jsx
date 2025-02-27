// import React from "react";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/UI/dashboard";
import Chat from "./components/UI/chat";
import Discover from "./components/UI/discover";
import Gigs from "./components/UI/gigs";
import Offer from "./components/UI/offer";
import Setting from "./components/UI/setting";
import Wallet from "./components/UI/wallet";
import LandingPage from "./components/UI/landingpage";
import GigsPage from "./components/gigsPage/GigsPage";
import MainLayout from "./MainLayout";

//

import React from "react";
// import Signup from "./components/signup/Signup";\]
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

import ButtonComponent from "../src/components/button";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gigs-page" element={<GigsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/emailcode" element={<Emailcode />} />
        <Route path="/SignupTrue" element={<SignupTrue />} />
        <Route path="/SigninTrue" element={<SigninTrue />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Persona" element={<Persona />} />
        <Route path="/TalentForm" element={<TalentForm />} />
        <Route path="/ClientForm" element={<ClientForm />} />
        <Route path="/ClientDashboard" element={<ClientDashboard />} />
        {/* <Route path="/TalentDashboard" element={<TalentDashboard />} /> */}
        <Route path="/button" element={<ButtonComponent />} />

        {/*  Navigation on for the dashboard*/}
        <Route path="/" element={<MainLayout />}>
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="/TalentDashboard" element={<Dashboard />} />
          <Route path="chat" element={<Chat />} />
          <Route path="discover" element={<Discover />} />
          <Route path="gigs" element={<Gigs />} />
          <Route path="offer" element={<Offer />} />
          <Route path="setting" element={<Setting />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
