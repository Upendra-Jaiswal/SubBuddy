import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import LandingPage from "./components/LandingPage";
import SubscriptionsPage from "./components/SubscriptionsPage";
import HomePage from "./pages/HomePage";
import MyProfile from "./pages/Myprofile/Myprofile";
import Sharesubs from "./pages/Myprofile/ShareSubs/Sharesub";
// index.js or App.js
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/sharemyubs" element={<Sharesubs />} />
      </Routes>
    </Router>
  );
};

export default App;
