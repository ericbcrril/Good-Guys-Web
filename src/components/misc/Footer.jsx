import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="footer-serview">
            <section className="footer-serview-section0">
                <div>
                    <h2>Contacto</h2>
                        <a href="mailto:goodguysmanagment@gmail.com">goodguysmanagment@gmail.com</a>
                        <p>3318522551</p>
                </div>
                <div>
                    <h2>Nuestras Redes</h2>
                            <a href="https://www.facebook.com/profile.php?id=61564172147714&mibextid=ZbWKwL">
                                <FontAwesomeIcon icon={faFacebook} className="social-icons"/>
                                {"  www.facebook/Goodguyscomp"}
                            </a><br/>
                            <a href="https://www.instagram.com/goodguyscomp?igsh=ZHludTA4cmc1aXMw">
                                <FontAwesomeIcon icon={faInstagram} className="social-icons"/>
                                {"  www.instagram/goodguyscomp"}
                            </a>
                </div>
            </section>
            <section className="footer-serview-section1">
                <p>Copyright © 2024 Designed By Good Guys</p>
            </section>
        </footer>
    );
}

export default Footer;