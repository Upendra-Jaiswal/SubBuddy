// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow";

import SubscriptionsPage from "../components/SubscriptionsPage";
import AllSubscriptions from "../subscriptions/AllSubscriptions";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 space-y-6">
        <Slideshow />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <SubscriptionsPage />
        <AllSubscriptions />
        {/* {subscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
            />
          ))} */}
        {/* </div> */}
      </main>
    </div>
  );
};

export default HomePage;
