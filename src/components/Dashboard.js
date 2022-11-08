import React, { Fragment } from 'react';
// import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import building2 from '../assets/building2.svg';

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
      <section className="text-dark p-5 p-lg-0 ">
        <div className="container">
          <div className="d-sm-flex justify-content-center flex-row">
            {/* <img style={{
                             width: '450px',
                             height: '400px'
                         }} className="img-fluid" src={dashboard} alt="image" /> */}

            <div className="d-flex flex-column mt-5">
              <h1 class="font">DashBoard</h1>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="text-dark p-5 p-lg-0 ">
          <div className="container">
            <div className="d-sm-flex justify-content-center flex-row">
              <img
                style={{
                  width: '600px',
                  height: '500px',
                }}
                className="img-fluid pt-5"
                src={building2}
                alt="image"
              />

              <div className="d-flex justify-content-center flex-column p-5 m-5">
                {/* <h1 class="font">Welcome</h1>

              <div className="mt-5">
                <h2 className="mb-4">Get started by adding a habit</h2>
              </div> */}

                <div className="m-3 pt-5">
                  <Link
                    to="/signup_login/dashboard/AddPatients"
                    className="btn text-light btn-lg text-sm-start rounded-pill"
                    style={{
                      background: '#35CBBD',
                    }}
                  >
                    Add Patients
                  </Link>
                </div>

                <div className="m-3">
                  <Link
                    to="/signup_login/dashboard/ShowPatients"
                    className="btn text-light btn-lg text-sm-start rounded-pill"
                    style={{
                      background: '#35CBBD',
                    }}
                  >
                    Show Patients
                  </Link>
                </div>

                <div className="m-3">
                  <button
                    className="btn text-light btn-lg text-sm-start rounded-pill"
                    style={{
                      background: '#fe0101',
                    }}
                    onClick={() => removeToken()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
