import React from "react";
import Ustate from "./Ustate";

const Content = function(props){
   return(
<nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
  <div className="container-fluid">
    <h2 className="text-white">TA</h2>
    <a className="navbar-brand ms-4" to="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/">{props.about}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.catagories}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="/">Action</a></li>
            <li><a className="dropdown-item" to="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">{props.contact}</a>
        </li>
      </ul>
      <Ustate/> 
    </div>
  </div>
</nav>
   )
}

export default Content;
