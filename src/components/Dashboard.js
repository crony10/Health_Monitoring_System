import React, { Fragment } from 'react';
// import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dashboard = ({ props }) => {
  // const [HospitalName, setHospitalName] = useState({
  //   HospitalName: props
  // });
  
  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  



  return (
    <>
      <h1>Welcome</h1>
      <button onClick={() => removeToken()}>Logout</button>
      <Link
        to="/signup_login/dashboard/AddPatients"
        className="btn text-light btn-lg text-sm-start rounded-pill"
        style={{
          background: '#35CBBD',
        }}
      >
        Add Patients
      </Link> 

      <Link
        to="/signup_login/dashboard/ShowPatients"
        className="btn text-light btn-lg text-sm-start rounded-pill"
        style={{
          background: '#35CBBD',
        }}
      >
        Show Patients
      </Link>

      
    </>
  );
};

export default Dashboard;
