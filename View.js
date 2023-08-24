import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const View = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    age: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get(`http://localhost:4000/users/${id}`);
    setUser(res.data);
  };
  
  return(
    <div className="container py-4">
        <Link className="btn btn-primary" to="/">
            back to home 
        </Link>
        <h1 className="display-4">User Id:{id}</h1>
     <ul className="list-group w-50">
        <li className="list-group-item">name:{user.name}</li>
        <li className="list-group-item"> user name:{user.username}</li>
        <li className="list-group-item">email:{user.email}</li>
        <li className="list-group-item">phone:{user.phone}</li>
        <li className="list-group-item">age:{user.age}</li>
     </ul>
    </div>
  )
};
