// import React from "react";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/TalentUI/dashboard";
import Chat from "./components/TalentUI/chat";
import Discover from "./components/TalentUI/discover";
import Gigs from "./components/TalentUI/gigs";
import Offer from "./components/TalentUI/offer";
import Setting from "./components/TalentUI/setting";
import Wallet from "./components/TalentUI/wallet";
import LandingPage from "./components/TalentUI/landingpage";
import Profile from "./components/TalentUI/Profile";
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
import ClientDashboard from "./components/ClientUI/ClientDashboard";
import ClientGig from "./components/ClientUI/clientGig";
// import ClientDashboard from "./Pages/ClientDashboard";
import ClientLayout from "./ClientLayout";
import Job from "./components/TalentUI/job";
import Password from "./components/Password/password";
import { Toaster } from "react-hot-toast";

// import WalletConnect from "./components/ConnectWallet/ConnectWallet";

// ##############################//
//        Testing Purpose       //
// ##############################//

// import Home from "./components/SmartContractTestComponents/pages/Home";
// import Home from "./components/SmartContractTestComponents/pages/Home";
import ButtonComponent from "../src/components/button";
import { Buffer } from "buffer";
import ClientChat from "./components/ClientUI/ClientChat";
import ClientJob from "./components/ClientUI/ClientJob";
import ClientOffer from "./components/ClientUI/ClientOffer";
import ClientProfile from "./components/ClientUI/ClientProfile";
import ClientSetting from "./components/ClientUI/ClientSetting";
import ClientWallet from "./components/ClientUI/ClientWallet";
import ClientDiscover from "./components/ClientUI/ClientDiscover";

// import protected route
import ProtectedRoute from "./components/ProtectedRoute";
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
        <Route path="/password" element={<Password />} />
        <Route path="/TalentForm" element={<TalentForm />} />
        <Route path="/ClientForm" element={<ClientForm />} />

        {/* --------------- ConnectWallet integration ------------------- */}
        {/* <Route path="/ClientForm" element={<ClientForm />} /> */}

        <Route path="/browse-talent" element={<BrowseTalentPage />} />

        {/*************Client*****************/}
        <Route path="job" element={<ClientDashboard />} />

        <Route path="/profile" element={<Profile />} />

        {/*  Navigation on for the dashboard*/}
        <Route path="client" element={<ClientLayout />}>
          <Route
            path="/client/dashboard"
            element={
              <ProtectedRoute>
                <ClientDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/client/chat" element={<ClientChat />} />
          <Route path="/client/discover" element={<ClientDiscover />} />
          <Route path="/client/gig" element={<ClientGig />} />
          <Route path="/client/job" element={<ClientJob />} />
          <Route path="/client/offer" element={<ClientOffer />} />
          <Route path="/client/setting" element={<ClientSetting />} />
          <Route path="/client/wallet" element={<ClientWallet />} />
        </Route>

        {/* Routes for Talents dashboard */}
        <Route path="talent" element={<MainLayout />}>
          <Route
            path="/talent/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
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
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
