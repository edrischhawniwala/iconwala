import React, { Fragment } from "react";
import logo from '../imgs/iconwalalogo.png';
import mobilemenu from '../imgs/menu-bar.png'
import '../styles/navbar.css';


export function Navbar() {


    
    return <Fragment>
    <div className="custom-mobile-menu">
        <img src={mobilemenu} alt="mobile icon" />
    </div>
   <div className="navbar-div">
    <div className="nav-logo">
    <img src={logo} alt="Iconwala Logo" />
    <div className="iconwala-text"><span style={{ color:'#F48B3C'}}>iCon</span><span style={{ color:'#449AF7'}}>Wala</span></div>
    </div>
    <div className="navigation-items">
        <a href="#">Explore</a>
        <a href="#">Add Your Design</a>
        <a href="#">Free Assets</a>
        <a href="#">About Us</a>
    </div>
    <div className="nav-signin-btns">
    <a href="/signin">Sign In</a>
    <a href="/signup">Sign Up</a>
    </div>

   </div>
   


    </Fragment>
    
    


}