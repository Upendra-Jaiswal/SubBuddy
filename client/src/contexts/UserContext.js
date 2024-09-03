// // src/UserContext.js
// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userId, setUserId] = useState(null);

//   // Example: Fetch user info on component mount
//   useEffect(() => {
//     // Replace with your authentication check logic
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get("/api/user"); // Adjust the endpoint as needed
//         setUserId(response.id);
//         console.log(response);
//       } catch (error) {
//         console.error("Failed to fetch user info", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };


import React from "react";

const UserContext = React.createContext(null);

export default UserContext;
