import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';

const Temp = ({ setAuth }) => {
  const [temp, setTemp] = useState(0);
  const [avgHr, setAvgHr] = useState(0);
  const [spO, setSpo] = useState(0);
  //   const removeToken = () => {
  //     localStorage.removeItem('token');
  //     window.location.reload(false);
  //   };

  // Backend call for temperature
  const temperature = (e) => {
    setInterval(async () => {
      // console.log(temp);
      // try {
      //   const response = await fetch(
      //     'https://hmsapis1.azurewebsites.net/api/WebAppApis/LatestMeasuredData',
      //     {
      //       method: 'GET',
      //       headers: { 'Content-Type': 'application/json' },
      //     }
      //   );

      //   const parseRes = await response.json();
      //   console.log(parseRes.field1);
      //   setTemp(parseRes.field1);
      //   setAvgHr(parseRes.field2);
      //   setSpo(parseRes.field3);
      // } catch (err) {
      //   console.log(err.message);
      // }
    }, 1000);
  };

  useEffect(() => {
    temperature();
  }, []);

  return (
    <>
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
                <h1 class="font">Welcome Name</h1>
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
                <span className=" h4 " >Temperature</span>
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

                <iframe src={"https://thingspeak.com/channels/1855560/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line"} width="105%" height="350"/>
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

                <iframe src={"https://thingspeak.com/channels/1855560/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line"} width="105%" height="350"/>
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

                <iframe src={"https://thingspeak.com/channels/1855560/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line"} width="105%" height="350"/>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Temp;
