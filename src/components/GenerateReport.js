import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import showDetails from '../assets/showDetails.svg';
import css from './generateReport.css';

const GenerateReport = ({ setAuth, history }) => {
  const [inputs, setInputs] = useState({
    ContactNo: '',
    PatientId: '',
    StartDate: '',
    EndDate: '',
  });
  const { ContactNo, PatientId, StartDate, EndDate } = inputs;

  const [parseRes, setParseRes] = useState([{}]);
  //   let parseRes = [{}];
  let report;
  const [flag, setFlag] = useState("");

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(e);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // console.log(inputs.StartDate);
    // console.log(typeof inputs.StartDate);

    // const navigate = useHistory();

    // setInputs('');

    // Backend call by clicking submit button

    try {
      const body = {
        PatientId,
        ContactNo,
        StartDate,
        EndDate,
      };

      const response = await fetch(
        'https://hmsapis1.azurewebsites.net/api/WebAppApis/ReportData',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      setParseRes(await response.json());
    //   {
    //     parseRes.map((element) => {
    //       console.log(element.created_at);
    //     });
    //   }
      setFlag("1");

      //   console.log('logging response ' + parseRes);
      //     console.log(parseRes[0]);
      //   setReport({parseRes});
      //   console.log("in the list: "+ report[0]);

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

      if (parseRes.Message === 'Failed') {
        toast.error('User does not exist!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      //   setInputs({ PatientName: '', ContactNo: '', ChannelId: '' });
      // history.push('/signup_login/dashboard/ShowPatientDetails/');

      //   setTemp(parseRes.field1);
      //   setAvgHr(parseRes.field2);
      //   setSpo(parseRes.field3);
      //   setpName(parseRes.PatientName);

      //   setUrl1(parseRes.url1);
      //   setUrl2(parseRes.url2);
      //   setUrl3(parseRes.url3);

      //   patientDetails();
    } catch (err) {
      console.log(err.message);
    }
  };

  // Backend call for temperature
  //   const patientDetails = (e) => {
  //     setInterval(async () => {
  //       // console.log(temp);
  //       try {
  //         const body = {
  //           ContactNo,
  //           PatientId,
  //         };

  //         const response = await fetch(
  //           'https://hmsapis1.azurewebsites.net/api/WebAppApis/LatestMeasuredData',
  //           {
  //             method: 'POST',
  //             headers: { 'Content-Type': 'application/json' },
  //             body: JSON.stringify(body),
  //           }
  //         );
  //         const parseRes = await response.json();
  //         console.log(parseRes.field1);

  //         setTemp(parseRes.field1);
  //         setAvgHr(parseRes.field2);
  //         setSpo(parseRes.field3);

  //         setUrl1(parseRes.url1);
  //         setUrl2(parseRes.url2);
  //         setUrl3(parseRes.url3);

  //         // console.log("reached before temp high");

  //         // temp
  //         let temp = parseRes.field1;
  //         console.log(typeof temp);
  //         if (parseInt(temp) <= 94 || parseInt(temp) >= 99) {
  //           document.getElementById('temperature').style.background = 'red';
  //           toast.warning(
  //             `Temperature of ${parseRes.PatientName} is above the specified threshold!`,
  //             {
  //               position: toast.POSITION.TOP_CENTER,
  //             }
  //           );
  //         } else {
  //           document.getElementById('temperature').style.background = '#bfede9';
  //         }

  //         // heart rate
  //         if (parseInt(parseRes.field2) < 55 || parseInt(parseRes.field2) > 120) {
  //           document.getElementById('avgHr').style.background = 'red';
  //           toast.warning(
  //             `Heart Rate of ${parseRes.PatientName} is above the specified threshold!`,
  //             {
  //               position: toast.POSITION.TOP_CENTER,
  //             }
  //           );
  //         } else {
  //           document.getElementById('avgHr').style.background = '#bfede9';
  //         }

  //         // spo2
  //         if (parseInt(parseRes.field3) < 95) {
  //           document.getElementById('spo2').style.background = 'red';
  //           toast.warning(
  //             `SpO2 of ${parseRes.PatientName} is  above the specified threshold!`,
  //             {
  //               position: toast.POSITION.TOP_CENTER,
  //             }
  //           );
  //         } else {
  //           document.getElementById('spo2').style.background = '#bfede9';
  //         }
  //       } catch (err) {
  //         console.log(err.message);
  //       }
  //     }, 17000);
  //   };

  //   const renderTableData = () => {
  //     return parseRes.map(element=>{
  //         return(
  //             <tr key={element.created_at}>
  //                 <td>{element.field1}</td>
  //                 <td>{element.field2}</td>
  //                 <td>{element.field3}</td>
  //             </tr>
  //         )
  //     })
  //   };
// temp commit
  const renderDates = () => {
    return parseRes.map(function (element, index) {
      return (
        <tr>
          <td>{element.created_at}</td>
          <td>{element.field1}</td>
          <td>{element.field2}</td>
          <td>{element.field3}</td>
        </tr>
      );
    });
  };
  const renderTemp = () => {
    return parseRes.map(function (element, index) {
      return (
        <tr>
          <td>{element.field1}</td>
        </tr>
      );
    });
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
              <h1 className="mt-5 text-center">Generate Patient Report</h1>
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

                <label style={{ color: '#259388' }} htmlFor="StartDate">
                  <h5>From:</h5>
                </label>

                <input //YYYY-MM-DD
                  type="date"
                  id="start"
                  placeholder="Patient ID"
                  className="form-control my-3"
                  onChange={(e) => onChange(e)}
                  name="StartDate"
                  value={StartDate}
                />

                <label style={{ color: '#259388' }} htmlFor="EndDate">
                  <h5>To:</h5>
                </label>
                <input //YYYY-MM-DD
                  type="date"
                  id="end"
                  placeholder="Patient ID"
                  className="form-control my-3"
                  onChange={(e) => onChange(e)}
                  name="EndDate"
                  value={EndDate}
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
                    Generate Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Table approach */}
      {/* {flag && (
        <table style={css.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>field1</th>
              <th>field2</th>
              <th>field3</th>
            </tr>
          </thead>

          <tbody>{renderDates()}</tbody>
        </table>
      )} */}

      {/* improved table  */}
      <section>
        <div className="container py-2">
          <div className="d-sm-flex justify-content-center">
            <div
              style={{
                background: '#bfede9',
                width: '60%',
              }}
            >
              {flag && (
                <table style={css.table}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Temperature</th>
                      <th>Average Heart Rate</th>
                      <th>Pulse Oxygen</th>
                    </tr>
                  </thead>

                  <tbody>{renderDates()}</tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ul li approach */}
      {/* {flag && (
        <ul>
          <li>date</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          {parseRes.map(function (element, index) {
            return element.created_at;
          })}
        </ul>
      )} */}
    </Fragment>
  );
};

export default GenerateReport;
