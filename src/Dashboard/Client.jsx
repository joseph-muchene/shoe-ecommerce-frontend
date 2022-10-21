import React from "react";
import Moment from "react-moment";
function Client({ user }) {
 
  return (
    <>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="ms-3">
              <p class="fw-bold mb-1">{user.username}</p>
            </div>
          </div>
        </td>
        <td>
          <p class="text-muted mb-0">{user.email}</p>
        </td>
        <td>
          <p class="fw-normal mb-1">4</p>
        </td>
        {/* <td>
          <span class="badge badge-warning rounded-pill d-inline">
            {!user.city ? "Nairobi" : user.city}
          </span>
        </td> */}
        <td>
          <Moment format="YYYY/MM/DD">{new Date(user.createdAt)}</Moment>
        </td>
        <td>{user.isAdmin ? "true" : "not admin"}</td>
      </tr>
    </>
  );
}

export default Client;
