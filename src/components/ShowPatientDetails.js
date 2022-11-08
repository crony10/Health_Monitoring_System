import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

const ShowPatientDetails = ({ setAuth }) => {
  const [temp, setTemp] = useState(0);
  const [avgHr, setAvgHr] = useState(0);
  const [spO, setSpo] = useState(0);

//   Backend call for temperature
    const temperature = (e) => {
      setInterval(async () => {
        console.log(temp);
        try {
          const response = await fetch(
            'https://hmsapis1.azurewebsites.net/api/WebAppApis/LatestMeasuredData',
            {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            }
          );
          const parseRes = await response.json();
          console.log(parseRes.field1);
          setTemp(parseRes.field1);
          setAvgHr(parseRes.field2);
          setSpo(parseRes.field3);
        } catch (err) {
          console.log(err.message);
        }
      }, 1000);
    };

  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };

    useEffect(() => {
      temperature();
    }, []);

  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-sm navbar-light py-3">
        <div className="container ">
          <h1>welcome ...</h1>

          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-bs-toggle="collapse"
            // data-target="#navmenu"
            href="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/signup_login/dashboard/AddPatients"
                  className="btn text-light btn-lg text-sm-start rounded-pill"
                  style={{
                    background: '#35CBBD',
                  }}
                >
                  Add Patient Details
                </Link>
                {/* <Link to="/signup_login/login/" className="nav-link text-dark">Log in</Link> */}
              </li>
              <li className="nav-item">
                <button
                  style={{
                    background: '#35CBBD',
                  }}
                  className="btn text-light btn-lg text-sm-start rounded-pill"
                  onClick={() => removeToken()}
                >
                  Logout
                </button>
                {/* <Link to="/signup_login/register/" className="nav-link text-dark">Register</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Patient details */}
      <div
        style={{
          background: '#F9F9FF',
        }}
      >
        <section className="text-dark p-5 p-lg-0 ">
          <div className="container">
            <div className="d-sm-flex justify-content-center flex-row">
              {/* <img style={{
                              width: '450px',
                              height: '400px'
                          }} className="img-fluid" src={dashboard} alt="image" /> */}

              <div className="d-flex flex-column">
                <h1 class="font">Patient Name, Age ...</h1>
              </div>
            </div>
          </div>
        </section>

        <Card
          className="d-inline-flex col-example shadow-lg p-4 rounded"
          style={{
            width: '29rem',
            margin: '20px',
            background: '#ffffff',
          }}
        >
          <Card.Body class="cards">
            <Card.Header style={{ background: '#ffffff' }} className="mb-3 ">
              <div>
                {/* <span className="h4">
                                  <FontAwesomeIcon style={{
                                      color: '#6c63ff'
                                  }} icon={faBullseye} /> 
                              </span> */}
                <span className=" h4 ">Temperature</span>
              </div>
            </Card.Header>

            <Card.Text className="mb-2 ml-3 mt-1">
              <div>
                {/* <span className="my-auto h4">
                                  <FontAwesomeIcon className="" style={{
                                      color: '#6c63ff'
                                  }} icon={faGift} />
                              </span> */}

                <span className="ml-2 h4">{temp}</span>
              </div>
            </Card.Text>

            <Card.Text className="mt-5">
              <div>
                {/* <span className="my-auto h4">
                                  <FontAwesomeIcon className="" style={{
                                      color: '#6c63ff'
                                  }} icon={faGift} />
                              </span> */}

                <iframe
                  src={
                    'https://thingspeak.com/channels/1855560/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line'
                  }
                  width="105%"
                  height="350"
                />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="d-inline-flex col-example shadow-lg p-4 rounded"
          style={{
            width: '29rem',
            margin: '20px',
            background: '#ffffff',
          }}
        >
          <Card.Body class="cards">
            <Card.Header style={{ background: '#ffffff' }} className="mb-3">
              <div>
                {/* <span className="h4">
                                  <FontAwesomeIcon style={{
                                      color: '#6c63ff'
                                  }} icon={faBullseye} /> 
                              </span> */}
                <span className="ml-2 h4">Average Heart Rate</span>
              </div>
            </Card.Header>

            <Card.Text className="mb-2 ml-3 mt-1">
              <div>
                {/* <span className="my-auto h4">
                                  <FontAwesomeIcon className="" style={{
                                      color: '#6c63ff'
                                  }} icon={faGift} />
                              </span> */}

                <span className="ml-2 h4">{avgHr}</span>
              </div>
            </Card.Text>

            <Card.Text className="mt-5">
              <div>
                {/* <span className="my-auto h4">
                                  <FontAwesomeIcon className="" style={{
                                      color: '#6c63ff'
                                  }} icon={faGift} />
                              </span> */}

                <iframe
                  src={
                    'https://thingspeak.com/channels/1855560/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line'
                  }
                  width="105%"
                  height="350"
                />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="d-inline-flex col-example shadow-lg p-4 rounded"
          style={{
            width: '29rem',
            margin: '20px',
            background: '#ffffff',
          }}
        >
          <Card.Body class="cards">
            <Card.Header style={{ background: '#ffffff' }} className="mb-3">
              <div>
                {/* <span className="h4">
                                  <FontAwesomeIcon style={{
                                      color: '#6c63ff'
                                  }} icon={faBullseye} /> 
                              </span> */}
                <span className="ml-2 h4">Pulse Oxygen</span>
              </div>
            </Card.Header>

            <Card.Text className="mb-2 ml-3 mt-1">
              <div>
                {/* <span className="my-auto h4">
                                  <FontAwesomeIcon className="" style={{
                                      color: '#6c63ff'
                                  }} icon={faGift} />
                              </span> */}

                <span className="ml-2 h4">{spO}</span>
              </div>
            </Card.Text>

            <Card.Text className="mt-5">
              <div>
                {/* <span className="my-auto h4">
                                  <FontAwesomeIcon className="" style={{
                                      color: '#6c63ff'
                                  }} icon={faGift} />
                              </span> */}

                <iframe
                  src={
                    'https://thingspeak.com/channels/1855560/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line'
                  }
                  width="105%"
                  height="350"
                />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default ShowPatientDetails;
