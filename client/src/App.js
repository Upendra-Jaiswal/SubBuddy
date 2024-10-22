import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import LandingPage from "./components/LandingPage";
import SubscriptionsPage from "./components/SubscriptionsPage";
import HomePage from "./pages/HomePage";
import MyProfile from "./pages/Myprofile/Myprofile";
//import Sharesubs from "./pages/Myprofile/ShareSubs/Sharesub";
import Sharesubs from "./pages/Myprofile/ShareSubs/Sharesub";
import Users from "./pages/Users/Users";
import Chat from "./pages/Chat/Chat";
import UserContext from "./contexts/UserContext";
// index.js or App.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import Seemysharedsubs from "./pages/Myprofile/ShareSubs/Seemysharedsub";
import UsersSharingSubscription from "./UsersSharingSubscription";

import AllSubscriptions from "./subscriptions/AllSubscriptions";
import SubscriptionDetails from "./subscriptions/SubscriptionDetails";
import UserSubscriptions from "./subscriptions/UserSubscriptions";
import Subscribe from "./subscriptions/Subscribe";
import ShareSubscription from "./subscriptions/ShareSubscription";
import SharedSubscriptionPage from "./subscriptions/SharedSubscriptionPage";
import PaymentPage from "./PaymentPage";

const App = () => {
  const [userId, setUserId] = useState(null);

  // Example: Fetch user info on component mount
  useEffect(() => {
    // Replace with your authentication check logic
    const fetchUser = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/api/getusers`);
        setUserId(response.data);
        console.log(response.data);

        //  console.log(response.data[0]._id);
      } catch (error) {
        console.error("Failed to fetch user info", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ userId }}>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/subscriptions2" element={<SubscriptionsPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/myprofile" element={<MyProfile />} />
          {/* <Route path="/sharemysubs" element={<Sharesubs />} /> */}
          <Route path="/sharemysubs" element={<ShareSubscription />} />
          {/* <Route path="/seemysharedsubs" element={<Seemysharedsubs />} /> */}
          <Route path="/seemysharedsubs" element={<SharedSubscriptionPage />} />

          <Route path="/users" element={<Users />} />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/usersSharingSubscription"
            element={<UsersSharingSubscription />}
          />

          <Route path="/chat" element={<Chat />} />
          <Route path="/payment" element={<PaymentPage />} />

          <Route path="/subscriptions" element={<AllSubscriptions />} />
          <Route path="/subscriptions/:id" element={<SubscriptionDetails />} />
          <Route path="/user-subscriptions" element={<UserSubscriptions />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/share-subscription" element={<ShareSubscription />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
