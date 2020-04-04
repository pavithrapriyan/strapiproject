import React from "react";  
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {  
  return (
    <footer>
        <div className="container">  
            <div className="footermain">
                <div className="mr-auto">© All Rights Reserved <Link to={"/"} className="navbar-brand"><FontAwesomeIcon icon={faHome} /> a!blog</Link></div>
                <div className="rightfooter">
                    <ul>
                        <li>
                            <Link to={"/"} className="navbar-brand">Contact</Link>
                        </li>
                        <li>
                            <Link to={"/"} className="navbar-brand">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={"/"} className="navbar-brand">Advertise with us</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>  
    </footer>
  );
};

export default Footer;  