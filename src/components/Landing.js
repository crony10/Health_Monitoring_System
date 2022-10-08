import React, { useState } from "react";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <>
           
            <Link  to="/signup_login/login" ><h4 style={{ color: '#6C63FF' }}>Sign in</h4></Link>
            <Link  to="/signup_login/register" ><h4 style={{ color: '#6C63FF' }}>Register</h4></Link>

        </>
    );
};

export default Landing;