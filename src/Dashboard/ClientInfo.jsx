import React from "react";

import { useSelector } from "react-redux";
import Client from "./Client";

function ClientInfo() {
  const { users } = useSelector((state) => state.User);

  return (
    <div className="container">
      <table class="table align-middle mb-0 bg-white container">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>orders</th>
            <th>created</th>
            <th>isAdmin</th>
            
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((user) => <Client user={user} />)}
        </tbody>
      </table>
    </div>
  );
}

export default ClientInfo;
