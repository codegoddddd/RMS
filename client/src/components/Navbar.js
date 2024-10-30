import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../icon.png'
import { useAuth } from './AuthContext';

function Navbar() {
    const { isLoggedIn } = useAuth(); // Use the isLoggedIn state from the context

    const navigate = useNavigate();

    const handleLoginClick = (event) => {
      
      event.preventDefault();
      console.log('Before navigate');
      navigate('/Login');
      console.log('After navigate');
      console.log('isLoggedIn:', isLoggedIn);
    };
    
    return (
    <>
      <nav className="navbar navbar-expand-lg sticky-lg-top bg-info" style={{backgroundImage : `url(${require('../finalbg.jpg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3"/>
          ScoreCrafters
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/ContactUs">Contact Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Result
                </a>
                <ul className="dropdown-menu">
                  <li><p className="dropdown-item">Computer Branch</p></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/Secondyrfirstmarks">SE sem-1</a></li>
                  <li><a className="dropdown-item" href="/Secondyrsecondmarks">SE sem-2</a></li>
                  <li><a className="dropdown-item" href="/Thirdyrfirstmarks">TE sem-1</a></li>
                  <li><a className="dropdown-item" href="/Thirdyrsecondmarks">TE sem-2</a></li>
                  <li><a className="dropdown-item" href="/WIP">BE sem-1</a></li>
                  <li><a className="dropdown-item" href="/WIP">BE sem-2</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>


            <div className="d-flex">
            {isLoggedIn ? (
              <Link to="/Profile" className="nav-link">
                <button type="button" className="btn btn-primary mx-2 my-2">
                  Profile
                </button>
              </Link>
            ) : (
              <a href="/Login" className="nav-link" onClick={handleLoginClick}>
                <button type="button" className="btn btn-primary mx-2 my-2">
                  Login/Register
                </button>
              </a>
            )}
          </div>
          </div>
        </div>
      </nav>
    </>
    )
}

export default Navbar
