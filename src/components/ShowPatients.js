import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ShowPatients = ({ setAuth, history }) => {
  const [temp, setTemp] = useState(0);
  const [avgHr, setAvgHr] = useState(0);
  const [spO, setSpo] = useState(0);

  const [inputs, setInputs] = useState({
    mono: '',
    pid: '',
  });
  const { mono, pid } = inputs;

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
        mono,
        pid,
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
      console.log("logging response "+ parseRes.Message);

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
    } catch (err) {
      console.log(err.message);
    }
  };

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

      <form onSubmit={onSubmitForm} class="was-validated">
        <input
          type="text"
          name="mono"
          value={mono}
          placeholder="Mobile Number"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />

        <input
          type="text"
          name="pid"
          value={pid}
          placeholder="Patient ID"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
        {/* <div>
          <Link to="/signup_login/register/">register</Link>
        </div>
        <Link to="/">home page</Link> */}
      </form>
    </Fragment>
  );
};

export default withRouter(ShowPatients);
