import React, { Fragment, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ render }) => {
  useEffect(() => {
    const nav = document.querySelector(".customNav");
    if (render) {
      nav.style.background = "transparent";
      if (nav) {
        document.addEventListener("scroll", () => {
          var scrollPos = window.scrollY;
          if (scrollPos > 70) {
            nav.style.background = "rgba(27, 27, 27, 0.95)";
          } else {
            nav.style.background = "transparent";
          }
        });
      }
    } else {
      nav.style.background = "#145a66";
    }
  }, [render]);

  return (
    <Fragment>
      <Navbar
        fixed="top"
        className="customNav"
        variant="light"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              className="logo"
              src="https://i.ibb.co/F50Jh2G/Foodies.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink className="navLink" to="/home">
              Home
            </NavLink>
            <NavLink className="navLink" to="/userActivity">
              User Activity
            </NavLink>
            {/* 
<----------------- Showing Logout Button If the user is logged in ----------------->
*/}
            {/* {user?.email ? (
              <Fragment>
                <NavLink className="navLink" to="/dashboard">
                  Dashboard
                </NavLink>
                <Button
                  className="customBtn btn-red ms-3"
                  onClick={logout}
                  variant="contained"
                >
                  Logout
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <NavLink className="navLink" to="/register">
                  Register
                </NavLink>
                <NavLink className="navLink" to="/login">
                  Login
                </NavLink>
              </Fragment>
            )} */}
            {/* 
<----------------------- Showing Display Name of User ----------------------->
 */}
            {/* {user?.displayName && (
              <Navbar.Text className="ms-3 text-white">
                <span>{user.displayName}</span>
              </Navbar.Text>
            )} */}
            {/* 
<----------------------- Showing User Display Picture ----------------------->
 */}
            {/* {user?.photoURL && (
              <img className="displayPic ms-3" src={user.photoURL} alt="" />
            )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
