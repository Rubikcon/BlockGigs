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
import Profile from "./Util/Profile";
import MainLayout from "./MainLayout";
import BrowseTalentPage from "./components/BrowseTalent/BrowseTalentPage";
import LeaderBoardPage from "./components/LeaderBoard/LeaderBoardPage";
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
import GigsPage from "./components/gigsPage/GigsPage";
import GigDetailPage from "./components/gigsDetailPage/gigDetailPage";
import ClientDashboard from "./Pages/ClientDashboard";
import ClientLayout from "./ClientLayout";
// import WalletConnect from "./components/ConnectWallet/ConnectWallet";

// ##############################//
//        Testing Purpose       //
// ##############################//

import Home from "./components/SmartContractTestComponents/pages/Home";
import Job from "./Util/job";
// import Home from "./components/SmartContractTestComponents/pages/Home";
import ButtonComponent from "../src/components/button";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gigs-page" element={<GigsPage />} />
        <Route path="/gig-detail" element={<GigDetailPage />} />
        <Route path="/leader-board" element={<LeaderBoardPage />} />
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

        {/* --------------- ConnectWallet integration ------------------- */}
        {/* <Route path="/ClientForm" element={<ClientForm />} /> */}

        <Route path="/browse-talent" element={<BrowseTalentPage />} />

        {/*************Client*****************/}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="/client" element={<ClientDashboard />} />
        </Route>

        {/*  Navigation on for the dashboard*/}
        {/* <Route path="/" element={<MainLayout />}>
          <Route path="/TalentDashboard" element={<Dashboard />} />
          <Route path="chat" element={<Chat />} />
          <Route path="job" element={<Job />} />
          <Route path="profile" element={<Profile />} />
          <Route path="discover" element={<Discover />} />
          <Route path="gigs" element={<Gigs />} />
          <Route path="offer" element={<Offer />} />
          <Route path="setting" element={<Setting />} />
          <Route path="wallet" element={<Wallet />} /> */}
        {/* Navigation for the client dashboard */}
        <Route path="/client" element={<ClientDashboard />} />

        {/* Routes for Talents dashboard */}
        <Route path="talent" element={<MainLayout />}>
          <Route path="/talent/dashboard" element={<Dashboard />} />
          <Route path="/talent/chat" element={<Chat />} />
          <Route path="/talent/discover" element={<Discover />} />
          <Route path="/talent/gigs" element={<Gigs />} />
          <Route path="/talent/job" element={<Job />} />
          <Route path="/talent/profile" element={<Profile />} />
          <Route path="/talent/offer" element={<Offer />} />
          <Route path="/talent/setting" element={<Setting />} />
          <Route path="/talent/wallet" element={<Wallet />} />
        </Route>

        {/* Testing purpose for smart contract integration */}
        {/* <Route path="/smart" element={<Home />} /> */}
        <Route path="/button" element={<ButtonComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
