import React, { useState } from "react";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <>
           
            <Link  to="/signup_login/login" >Sign in</Link>
            <div><Link  to="/signup_login/register" >Register</Link></div>

        </>
    );
};

export default Landing;