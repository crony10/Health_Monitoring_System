import React, { Fragment } from 'react';
// import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import building2 from '../assets/building2.svg';
import { toast } from 'react-toastify';
const Dashboard = ({ props }) => {
  // const [HospitalName, setHospitalName] = useState({
  //   HospitalName: props
  // });

  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  function alarmAlert() {
    setInterval(async () => {
      // Fetching the userId
      // const incomingUserId = JSON.parse(localStorage.getItem('userId'));
      // console.log(incomingUserId);
      try {
        // console.log(userId);
        const response = await fetch(
          'https://hmsapis1.azurewebsites.net/api/WebAppApis/AlertForWeb',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const parseRes = await response.json();

        // this is the code written only for testing
        // if (parseRes === 'Fine') {
        //   // toast('Will close after 15s', { autoClose: 60000 });

        //   // let a = 'apple';
        //   let pName = parseRes.PatientName;
        //   let pNum = parseRes.ContactNo;
        //   let pId = parseRes.PatientId;
        //   // let pName = "patient1";
        //   // let pNum = "1234565678";
        //   // let pId = "1";
        //   toast.error(
        //     <div>
        //       <b>{pName}</b> is having an emergency!
        //       <br /> Contact Number: {pNum}
        //       <br /> Patient Id: {pId}
        //     </div>,
        //     {
        //       position: toast.POSITION.TOP_CENTER,
        //       autoClose: 60000

        //     }
        //   );
        // }

        if (parseRes !== 'Fine') {
          // toast('Will close after 15s', { autoClose: 60000 });

          // toast('Will close after 15s', { autoClose: 60000 });

          // let a = 'apple';
          let pName = parseRes.PatientName;
          let pNum = parseRes.ContactNo;
          let pId = parseRes.PatientId;
          // let pName = "patient1";
          // let pNum = "1234565678";
          // let pId = "1";
          toast.error(
            <div>
              <b>{pName}</b> is having an emergency!
              <br /> Contact Number: <b>{pNum}</b>
              <br /> Patient Id: <b>{pId}</b>
            </div>,
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 30000,
            }
          );
        }
      } catch (err) {
        console.log(err.message);
      }
    }, 1000);
  }

  useEffect(() => {
    alarmAlert();
  }, []);

  return (
    <>
      <div>
        <section className="text-dark p-5 p-lg-0 ">
          <div className="container">
            <div className="d-sm-flex justify-content-center flex-row">
              {/* <img style={{
                             width: '450px',
                             height: '400px'
                         }} className="img-fluid" src={dashboard} alt="image" /> */}

              <div className="d-flex flex-column mt-5">
                <h1 className="font">DashBoard</h1>
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
                      to="/dashboard/ShowHospitalProfile/"
                      className="btn text-light btn-lg text-sm-start rounded-pill"
                      style={{
                        background: '#35CBBD',
                      }}
                    >
                      Show Hospital Profile
                    </Link>
                  </div>
                  <div className="m-3">
                    <Link
                      to="/dashboard/ShowPatients/"
                      className="btn text-light btn-lg text-sm-start rounded-pill"
                      style={{
                        background: '#35CBBD',
                      }}
                    >
                      Show Patients
                    </Link>
                  </div>
                  <div className="m-3">
                    <Link
                      to="/dashboard/GenerateReport/"
                      className="btn text-light btn-lg text-sm-start rounded-pill"
                      style={{
                        background: '#35CBBD',
                      }}
                    >
                      Generate Patient Report
                    </Link>
                  </div>

                  <div className="m-3">
                    <Link
                      to="/dashboard/AddPatients/"
                      className="btn text-light btn-lg text-sm-start rounded-pill"
                      style={{
                        background: '#35CBBD',
                      }}
                    >
                      Add Patients
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
      </div>
    </>
  );
};

export default Dashboard;
