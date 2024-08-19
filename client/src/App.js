import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import LandingPage from "./components/LandingPage";
import SubscriptionsPage from "./components/SubscriptionsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/subscriptionspage" element={<SubscriptionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
