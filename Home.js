import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/users");
    setUser(result.data.reverse());
  };
  const deleteUser = async id => {
    console.log("Deleting user with id:", id);
    await axios.delete(`http://localhost:4000/users/${id}`);
    loadUsers();
  }
  
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mr-1" to={`/users/${user.id}`}>View</Link>
                  <Link className="btn btn-outline-primary m-2" to={`/users/edit/${user.id}`}>Edit</Link>
                  <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
