import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(email) {

  const navigate = useNavigate();

  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: "nav-item nav-link",
    aboutLinkClass: "nav-item nav-link",
    menuClass: ""
  });

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu
    });
  };


  const show = state.menu ? "show" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <span className="navbar-brand text-white m-3" >
        <h3>E-ticket Admin</h3>
      </span>
      <button className="navbar-toggler bg-white m-3" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon " />
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav text-white m-3">
          <Button
            className= "text-white"
            onClick={() =>{
              navigate("/home", {state :{userEmail :email}});
            }}
          >
            Home
          </Button>
          <Button
            className="text-white"
            to="/about"
            onClick={() =>{
              navigate("/about", {state :{useremail :email}});
            }}
          >
            About
          </Button>
        </div>

      </div>
    </nav>
  );
}

export default Header;
