// import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Dashboard from "./components/UI/dashboard";
import Chat from "./components/UI/chat";
import Discover from "./components/UI/discover";
import Gigs from "./components/UI/gigs";
import Offer from "./components/UI/offer";
import Setting from "./components/UI/setting";
import Wallet from "./components/UI/wallet";
import LandingPage from "./components/UI/landingpage";

import MainLayout from "./MainLayout";

const App = () => {
  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="chat" element={<Chat />} />
            <Route path="discover" element={<Discover />} />
            <Route path="gigs" element={<Gigs />} />
            <Route path="offer" element={<Offer />} />
            <Route path="setting" element={<Setting />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
          {/* <Route path="logout" element={<Signout />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
