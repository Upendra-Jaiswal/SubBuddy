import React, { useState, useEffect } from "react";
import SubscriptionSelect from "./SubscriptionSelect";
import PlanSelect from "./PlanSelect";
import DateInput from "./DateInput";
import SubmissionSuccess from "./Submissionsuccess";
//import carddatafile from "./carddata.json";
import axios from "axios";

const Sharesubs = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [planFromCard, setPlanFromCard] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscriptionId, setSelectedSubscriptionId] = useState("");

  const [carddatafile, setCardDataFromFile] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const token = localStorage.getItem("token"); // Get JWT token from local storage

        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/api/subscriptions`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token in header
          },
        });
        setCardDataFromFile(response.data);
        setSubscriptions(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch subscriptions");
      }
    };

    fetchSubscriptions();
  }, []);

  const options = Object.values(carddatafile).map((carddata) => (
    <option key={carddata.id} value={carddata.serviceName}>
      {carddata.serviceName}
    </option>
  ));

  const handleSubscriptionChange = (e) => {
    const selectedServiceName = e.target.value;
    setServiceName(selectedServiceName);

    const selectedSubscription = Object.values(carddatafile).find(
      (carddata) => carddata.serviceName === selectedServiceName
    );
    setPlanFromCard(selectedSubscription ? selectedSubscription.plans : []);
    setSelectedPlan(""); // Reset selected plan when subscription changes
  };

  const handlePlanChange = (e) => setSelectedPlan(e.target.value);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    if (endDate && newStartDate > endDate) setEndDate("");
  };

  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const minEndDate = startDate
    ? new Date(startDate).toISOString().split("T")[0]
    : "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serviceName || !startDate || !endDate || !selectedPlan) {
      alert("Please fill in all required fields.");
      return;
    }

    const selectedSubscription = Object.values(carddatafile).find(
      (carddata) => carddata.serviceName === serviceName
    );

    if (selectedSubscription) {
      const subscriptionData = {
        selectedSubscriptionId,
        serviceName,
        plans: selectedPlan,
        startDate,
        endDate,
      };

      // const { selectedSubscriptionId, serviceName, plans, startDate, endDate } =
      // req.body;

      console.log("Data being sent to backend:", subscriptionData);
      try {
        const response = await fetch(
          // `${process.env.REACT_APP_BACKEND_URL}/api/sharesub`,
          `${process.env.REACT_APP_BACKEND_URL}/api/sharesubscription`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(selectedSubscriptionId),
          }
        );

        console.log(subscriptionData);

        if (response.ok) {
          setSubmitted(true);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.error("Failed to submit subscription", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {submitted ? (
        <SubmissionSuccess />
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Create Subscription
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h1>Share a Subscription</h1>
              <label htmlFor="subscription-dropdown">
                Select a Subscription:
              </label>
              <select
                id="subscription-dropdown"
                value={selectedSubscriptionId}
                onChange={(e) => setSelectedSubscriptionId(e.target.value)}
              >
                <option value="">--Select Subscription--</option>
                {subscriptions.map((subscription) => (
                  <option key={subscription._id} value={subscription._id}>
                    {subscription.name}
                  </option>
                ))}
              </select>
            </div>
            <SubscriptionSelect
              serviceName={serviceName}
              options={options}
              onChange={handleSubscriptionChange}
            />
            <PlanSelect
              selectedPlan={selectedPlan}
              plans={planFromCard}
              onChange={handlePlanChange}
            />
            <DateInput
              id="start-date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <DateInput
              id="end-date"
              value={endDate}
              onChange={handleEndDateChange}
              min={minEndDate}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Publish
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Sharesubs;
