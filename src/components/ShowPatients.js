import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import showDetails from '../assets/showDetails.svg';

const ShowPatients = ({ setAuth, history }) => {
  const [temp, setTemp] = useState(5);
  const [avgHr, setAvgHr] = useState(0);
  const [spO, setSpo] = useState(0);

  const [pName, setpName] = useState('');
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [url3, setUrl3] = useState('');

  const [inputs, setInputs] = useState({
    ContactNo: '',
    PatientId: '',
  });
  const { ContactNo, PatientId } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(e);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // const navigate = useHistory();

    // setInputs('');

    // Backend call by clicking submit button

    try {
      const body = {
        ContactNo,
        PatientId,
      };

      const response = await fetch(
        'https://hmsapis1.azurewebsites.net/api/WebAppApis/LatestMeasuredData',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();
      console.log('logging response ' + parseRes);

      // if (parseRes.Message === "An error has occurred") {
      //   toast.error('User does not exist!', {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      // } else {
      //   console.log(parseRes + 'HELLO');
      //   toast.success('Register Successfully', {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      //   // e.target.reset();
      //   setInputs({ PatientName: '', ContactNo: '', ChannelId: '' });
      //   // localStorage.setItem('token', JSON.stringify('this is token'));
      //   // window.location.reload(false);
      //   // toast.error(parseRes);
      //   history.push('/signup_login/dashboard/ShowPatientDetails/');
      // }

      console.log(parseRes + 'HELLO');
      if (parseRes.Message === 'Failed') {
        toast.error('User does not exist!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      setInputs({ PatientName: '', ContactNo: '', ChannelId: '' });
      // history.push('/signup_login/dashboard/ShowPatientDetails/');

      setTemp(parseRes.field1);
      setAvgHr(parseRes.field2);
      setSpo(parseRes.field3);
      setpName(parseRes.PatientName);

      setUrl1(parseRes.url1);
      setUrl2(parseRes.url2);
      setUrl3(parseRes.url3);

      patientDetails();
    } catch (err) {
      console.log(err.message);
    }
  };

  // Backend call for temperature
  const patientDetails = (e) => {
    setInterval(async () => {
      // console.log(temp);
      try {
        const body = {
          ContactNo,
          PatientId,
        };

        const response = await fetch(
          'https://hmsapis1.azurewebsites.net/api/WebAppApis/LatestMeasuredData',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          }
        );
        const parseRes = await response.json();
        console.log(parseRes.field1);

        setTemp(parseRes.field1);
        setAvgHr(parseRes.field2);
        setSpo(parseRes.field3);

        setUrl1(parseRes.url1);
        setUrl2(parseRes.url2);
        setUrl3(parseRes.url3);

        // console.log("reached before temp high");

        // temp commit
        // temp
        let temp = parseRes.field1;
        console.log(typeof temp);
        if (parseInt(temp) <= 94 || parseInt(temp) >= 99) {
          document.getElementById('temperature').style.background = 'red';
          toast.warning(
            `Temperature of ${parseRes.PatientName} is above the specified threshold!`,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        } else {
          document.getElementById('temperature').style.background = '#bfede9';
        }

        // heart rate
        if (parseInt(parseRes.field2) < 55 || parseInt(parseRes.field2) > 115) {
          document.getElementById('avgHr').style.background = 'red';
          toast.warning(
            `Heart Rate of ${parseRes.PatientName} is above the specified threshold!`,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        } else {
          document.getElementById('avgHr').style.background = '#bfede9';
        }

        // spo2
        if (parseInt(parseRes.field3) < 95) {
          document.getElementById('spo2').style.background = 'red';
          toast.warning(
            `SpO2 of ${parseRes.PatientName} is  above the specified threshold!`,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        } else {
          document.getElementById('spo2').style.background = '#bfede9';
        }
      } catch (err) {
        console.log(err.message);
      }
    }, 17000);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-sm navbar-light py-3">
        <div className="container ">
          <Link to="/" className="navbar-brand text-dark">
            <img width="270px" src={showDetails} alt="Show patients" />
          </Link>
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
                    background: '#fe0101',
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

      <section>
        <div className="container py-2">
          <div className="d-sm-flex justify-content-center">
            <div
              style={{
                background: '#bfede9',
                width: '60%',
              }}
            >
              <h1 className="mt-5 text-center">Show Patients</h1>
              <form onSubmit={onSubmitForm} className="m-5 was-validated">
                <input
                  type="text"
                  name="ContactNo"
                  value={ContactNo}
                  placeholder="Mobile Number"
                  onChange={(e) => onChange(e)}
                  className="form-control my-3"
                />

                <input
                  type="text"
                  name="PatientId"
                  value={PatientId}
                  placeholder="Patient ID"
                  onChange={(e) => onChange(e)}
                  className="form-control my-3"
                />
                <div
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <button
                    style={{
                      background: '#35CBBD',
                      width: '30%',
                    }}
                    className="btn btn-block rounded-pill text-light"
                  >
                    Show Patient
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Patient details */}
      {pName && (
        <div>
          <section className="text-dark p-5 p-lg-0 ">
            <div className="container">
              <div className="d-sm-flex justify-content-center flex-row">
                {/* <img style={{
                             width: '450px',
                             height: '400px'
                         }} className="img-fluid" src={dashboard} alt="image" /> */}

                <div className="d-flex flex-column">
                  <h1 className="font">{pName}</h1>
                </div>
              </div>
            </div>
          </section>

          <div
            className="d-lg-flex justify-content-center"
            style={{
              background: '#dff6f4',
            }}
          >
            <Card
              id="temperature"
              className="d-inline-flex col-example shadow-lg p-4 rounded"
              style={{
                width: '29rem',
                margin: '20px',
                background: '#bfede9',
              }}
            >
              <Card.Body className="cards">
                <Card.Header
                  style={{ background: '#dff6f4' }}
                  className="mb-3 "
                >
                  <div>
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

                    <iframe src={url1} width="100%" height="350" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              id="avgHr"
              className="d-inline-flex col-example shadow-lg p-4 rounded"
              style={{
                width: '29rem',
                margin: '20px',
                background: '#bfede9',
              }}
            >
              <Card.Body className="cards">
                <Card.Header style={{ background: '#dff6f4' }} className="mb-3">
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

                    <iframe src={url2} width="100%" height="350" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              id="spo2"
              className="d-inline-flex col-example shadow-lg p-4 rounded"
              style={{
                width: '29rem',
                margin: '20px',
                background: '#bfede9',
              }}
            >
              <Card.Body className="cards">
                <Card.Header style={{ background: '#dff6f4' }} className="mb-3">
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

                    <iframe src={url3} width="100%" height="350" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default withRouter(ShowPatients);
