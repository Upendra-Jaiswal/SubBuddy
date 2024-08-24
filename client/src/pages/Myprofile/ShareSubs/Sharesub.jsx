import { useState, useContext } from "react";
import axios from "axios"; // Import axios for HTTP requests
import carddatafile from "./carddata.json";
import correctimage from "./depositphotos_12880120-stock-photo-green-check-mark.jpg";
import { useUser } from "../../../contexts/UserContext";

const Sharesubs = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [plans, setPlans] = useState([]);
  const [submitted, setSubmitted] = useState(false); // State to manage submission status

  //const { userId } = useContext(useUser); // Assuming userId is provided by UserContext

  // Create an array of options for the select input
  const options = Object.values(carddatafile).map((carddata) => (
    <option key={carddata.id} value={carddata.id}>
      {carddata.name}
    </option>
  ));

  // Handle subscription selection and update plans
  const handleSubscriptionChange = (e) => {
    const selectedId = e.target.value;
    setSelectedOption(selectedId);

    // Find the selected subscription and update plans
    const selectedSubscription = Object.values(carddatafile).find(
      (carddata) => carddata.id === parseInt(selectedId)
    );
    setPlans(selectedSubscription ? selectedSubscription.plans : []);
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    // Update the minimum allowed date for the end date field
    if (endDate && newStartDate > endDate) {
      setEndDate(""); // Clear end date if it's less than the new start date
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Calculate min end date based on start date
  const minEndDate = startDate
    ? new Date(startDate).toISOString().split("T")[0]
    : "";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Find the selected subscription details
    const selectedSubscription = Object.values(carddatafile).find(
      (carddata) => carddata.id === parseInt(selectedOption)
    );

    if (selectedSubscription) {
      const subscriptionData = {
        serviceName: selectedSubscription.serviceName,
        id: selectedSubscription._id,

        plans: selectedSubscription.plans,

        startDate,
        endDate,
        // user: userId,
        // Optionally include other data as needed
      };

      try {
        // Send data to the backend
        await axios.post("/api/sharesub", subscriptionData);

        // Set submitted status to true after successful submission
        setSubmitted(true);
      } catch (error) {
        console.error("Failed to submit subscription", error);
        // Handle error accordingly
      }
    }
  };
  const dummySubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {submitted ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <img
              src={correctimage}
              className="correct-image"
              alt="Order Placed"
            />
            <p className="text-gray-800 text-lg mb-4">
              Your subscription has been shared!
            </p>
            <p className="text-gray-600 text-md">
              This feature is currently under development. Please stay tuned for
              updates!
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Note: This is a dummy submission for development purposes.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Create Subscription
          </h2>
          <form onSubmit={dummySubmit} className="space-y-4">
            <div>
              <label
                htmlFor="subscription"
                className="block text-gray-700 font-medium mb-1"
              >
                Select your subscription
              </label>
              <select
                id="subscription"
                className="w-full border border-gray-300 rounded-md p-2"
                value={selectedOption}
                onChange={handleSubscriptionChange}
              >
                <option value="">-- Select an option --</option>
                {options}
              </select>
            </div>

            <div>
              <label
                htmlFor="plan"
                className="block text-gray-700 font-medium mb-1"
              >
                Select your plan
              </label>
              <select
                id="plan"
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">-- Select a plan --</option>
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="start-date"
                className="block text-gray-700 font-medium mb-1"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={handleStartDateChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label
                htmlFor="end-date"
                className="block text-gray-700 font-medium mb-1"
              >
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={handleEndDateChange}
                min={minEndDate} // Set minimum allowed date based on start date
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

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
