import React, { Fragment } from "react";
import '../styles/footer.css';
import logoimage from '../imgs/iconwalalogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {


    
    return <Fragment>
     <footer>
        <div className="footer-div">
            <div className="footer-links">
                <div className="footer-links-col">
                    <p className="footer-links-title">
                        Info
                    </p>
                    <p><a href="#" className="footerlink">About Us</a></p>
                    <p><a href="#" className="footerlink">Contact</a></p>
                </div>
                <div className="footer-links-col">
                    <p className="footer-links-title">
                        Icons
                    </p>
                    <p><a href="#" className="footerlink">Explore</a></p>
                    <p><a href="#" className="footerlink">Free Icons</a></p>
                    <p><a href="#" className="footerlink">Premium Icons</a></p>
                </div>
                <div className="footer-links-col">
                    <p className="footer-links-title">
                    Submit Your Design
                    </p>
                    <p><a href="#" className="footerlink">Add Your Design</a></p>
                    <p><a href="#" className="footerlink">How To Submit Your Design</a></p>
                </div>
                <div className="footer-links-col">
                    <p className="footer-links-title">
                    Policies
                    </p>
                    <p><a href="#" className="footerlink">Terms of Service</a></p>
                    <p><a href="#" className="footerlink">Privacy Policy</a></p>
                </div>                
            </div>
          
        </div>
        <div className="footer-bar">
                <div className="footerbar-logo">
                    <img src={logoimage} alt="" />
                    <p>© iConWala 2024</p>
                </div>
                <div className="footerbar-sociallinks">
                    <div className="footerbar-socialitem">
                    <a href="#`"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                        <div className="footerbar-socialitem">
                        <a href="#`"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className="footerbar-socialitem">
                        <a href="#`"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>

                </div>
            </div>
     </footer>
   </Fragment>
    
    


}