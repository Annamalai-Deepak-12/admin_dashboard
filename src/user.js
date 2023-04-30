import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        id: 1,
        username: "Person1",
        email: "person1@gmail.com",
        country: "India",
        state: "Tamil Nadu",
        city: "Coimbatore",
        phone: 8524563254,
        dob: "24-09-1998",
        gender: "Male",
      },
      {
        id: 2,
        username: "Person",
        email: "person2@gmail.com",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        phone: 8524567424,
        dob: "24-09-1997",
        gender: "Female",
      },
    ]);
  }, []);

  let deleteUser = () =>{
    const result = window.confirm("Are you sure want to delete?")

    if (result){
      alert ("Deleted")
    }
  }

  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/user_create"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50 "></i> Create user
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">User Details</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.state}</td>
                      <td>{user.city}</td>
                      <td>{user.phone}</td>
                      <td>{user.dob}</td>
                      <td>{user.gender}</td>
                      <td>
                        <Link
                          to={`/user/${user.id}`}
                          className="btn btn-warning mr-2"
                        >
                          View
                        </Link>
                        <Link
                          to={`/edit/${user.id}`}
                          className="btn btn-dark mr-2"
                        >
                          Edit
                        </Link>

                        <button onClick={()=> deleteUser()} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
