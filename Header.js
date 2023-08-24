import React from 'react';
import { Link } from "react-router-dom";
let style1={"background-color" : "#e3f2fd"}


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={style1}>
  <div className="container">
    <a className="navbar-brand" href="#">React User</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">
            Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">
            About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">
             Contact</Link>
        </li>
      </ul>
    </div>
    <Link className='btn btn-outline-dark' to="/users/add">Add User</Link>
  </div>
</nav>
  )
}
