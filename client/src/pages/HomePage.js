// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow";

import SubscriptionsPage from "../components/SubscriptionsPage";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 space-y-6">
        <Slideshow />
   
        <SubscriptionsPage />
 
      </main>
    </div>
  );
};

export default HomePage;
