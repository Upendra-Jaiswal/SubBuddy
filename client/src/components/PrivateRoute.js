// // src/components/PrivateRoute.js

// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import Dashboard from "../pages/da"

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem("authToken"); // Check if token exists

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;
import React from 'react'

const PrivateRoute = () => {
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute
