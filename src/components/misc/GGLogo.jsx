import React from "react";
import { Link } from "react-router-dom";

function GGLogo(){
    return(
        <Link to="/">
            <img className="gg-logo-toHome" src="images/logos/logo_min.png" alt="logo"/>
        </Link>
    );
}

export default GGLogo;