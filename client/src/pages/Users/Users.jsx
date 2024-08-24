import React from "react";
import dummyusers from "./dummyusers.json";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Users = () => {
  const location = useLocation();
  const users = location.state?.users || [];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
            <div key={user.id} className="mb-4 p-4 border rounded-lg">
              <p className="text-lg font-semibold">{user.name}</p>
              {/* <p className="text-sm text-gray-600">
                Subscriptions: {user.subscriptions.join(", ")}
              </p> */}

              <button className="bg-blue-600 rounded-md p-1 m-4 ">
                <Link to="/chat">Chat with {user.name}</Link>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found for this subscription.</p>
      )}
    </div>
    // <div>
    //   <div>
    //     {dummyusers.map((user) => (
    //       <div key={user.id}>
    //         <div>
    //           {" "}
    //           {user.name} {user.subscriptions}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Users;
