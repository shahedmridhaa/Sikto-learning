import React from "react";
import logo from "../../asset/logo2.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsBrightnessHigh, BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { Mycontext } from "../../Authcontext/Authcontext";
import { Image } from "react-bootstrap";
import "../../Defaultcss/Default.css"
import './Header.css'

const Header = () => {
  const {user, userSignOut, handleLightTheme, handleDarkTheme, darkMode} = useContext(Mycontext)

  const handleSignOut =()=>{
    userSignOut()
    .then(() => {
     
    }).catch((error) => {
     
    });
  }

  return (
    <Navbar className={`${darkMode ? "bg-yellow" : "bg-dark"}`} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: "40px" }} src={logo} alt="" />{" "}
          <span className="fw-bolder text-white"> SKITO LEARNING</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className="text-decoration-none text-white  fw-bold fs-6 px-3 "
              to="/home"
            >
              Home
            </Link>
            <Link
              className="text-decoration-none text-white fw-bold fs-6 px-3 "
              to="/course"
            >
              Courses
            </Link>

            <Link
              className="text-decoration-none text-white fw-bold fs-6 px-3 "
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-decoration-none text-white fw-bold fs-6 px-3 "
              to="/faq"
            >
              FAQ
            </Link>
       
            
          </Nav>

          <div className="d-flex align-items-center justify-content-end">
            {
              user?.uid?
              <>
            <Image data-toggle="tooltip" title={user.displayName} style={{height: '40px'}} roundedCircle src={user.photoURL}></Image>
            <button onClick={handleSignOut} className="btn btn-light btn-sm ms-3">SignOut</button>
              </>
              :
              <>
              <Link
              className="text-decoration-none text-white fw-bold fs-6 px-3 "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-decoration-none text-white fw-bold fs-6 px-3 "
              to="/register"
            >
              Register
            </Link>
              </>
            }
            <span className={`${darkMode ? "text-white mx-2" : "text-white mx-2"}`} onClick={handleLightTheme}><BsBrightnessHigh></BsBrightnessHigh></span>
            <span className={`${darkMode ? "text-dark mx-2" : "text-white mx-2"}`} onClick={handleDarkTheme}><BsFillMoonStarsFill></BsFillMoonStarsFill></span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
