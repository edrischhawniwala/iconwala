import React, { Fragment } from "react";
import logo from '../imgs/iconwalalogo.png';
import '../styles/navbar.css';


export function Navbar() {


    
    return <Fragment>
        
   <div className="navbar-div">
    <div className="nav-logo">
    <img src={logo} alt="Iconwala Logo" />
    <div className="iconwala-text"><span style={{ color:'#F48B3C'}}>Icon</span><span style={{ color:'#449AF7'}}>Wala</span></div>
    </div>

   </div>
   


    </Fragment>
    
    


}