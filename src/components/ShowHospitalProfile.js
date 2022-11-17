import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/logo.jpg';
import Dashboard from './Dashboard';

const ShowHospitalProfile = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    HospitalName: '',
    HospitalContactNo: '',
    HospitalEmailId: '',
    UserName: '',
    Password: '',
  });

  const {
    HospitalName,
    HospitalContactNo,
    HospitalEmailId,
    UserName,
    Password,
  } = inputs;

  // const onChange = (parseRes) => {
  //   // setInputs({ ...inputs, [e.target.name]: e.target.value });

  //   // console.log(e);
  // };

  const setRegisterAuth = (auth) => {
    console.log(auth);
    setAuth(auth);
  };

  const onProfileLoad = async (e) => {
    // e.preventDefault();

    const UserName = JSON.parse(localStorage.getItem('userId'));
    console.log(UserName);

    try {
      const body = {
        HospitalName,
        HospitalContactNo,
        HospitalEmailId,
        UserName,
        Password,
      };

      const response = await fetch(
        'https://hmsapis1.azurewebsites.net/api/WebAppApis/UserProfile',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      console.log(parseRes);
      setInputs({
        HospitalName: parseRes.HospitalName,
        HospitalContactNo: parseRes.HospitalContactNo,
        HospitalEmailId: parseRes.HospitalEmailId,
        UserName: parseRes.UserName,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    onProfileLoad();
  }, []);

  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-sm navbar-light py-3">
        <div className="container ">
          <Link to="/" className="navbar-brand text-dark">
            <img width="100px" src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* <Link to="/" className="nav-link text-dark">
                  Home page
                </Link> */}

                <Link
                  to="/"
                  className="btn text-light btn-lg text-sm-start rounded-pill"
                  style={{
                    background: '#35CBBD',
                  }}
                >
                  Home page
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link to="/signup_login/login/" className="nav-link text-dark">
                  Login
                </Link> */}

                <Link
                  to="/signup_login/login/"
                  className="btn text-light btn-lg text-sm-start rounded-pill"
                  style={{
                    background: '#35CBBD',
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <h1 className="mt-5 text-center">Register</h1> */}
      {/* <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="HospitalName"
          value={HospitalName}
          placeholder="Hospital Name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="HospitalContactNo"
          value={HospitalContactNo}
          placeholder="Hospital Contact Number"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
          maxLength="10"
        />
        <input
          type="text"
          name="HospitalEmailId"
          value={HospitalEmailId}
          placeholder="Hospital Email"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />

        <input
          type="text"
          name="UserName"
          value={UserName}
          placeholder="User Name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />

        <input
          type="text"
          name="Password"
          value={Password}
          placeholder="Password"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form> */}

      <section>
        <div className="container py-2">
          <div className="d-sm-flex justify-content-center">
            <div
              style={{
                background: '#bfede9',
                width: '60%',
              }}
            >
              <h1 className="mt-5 text-center" style={{ color: '#259388' }}>
                Hospital Profile
              </h1>

              <h3 className="m-5 ">
                Hospital Name:
                <span style={{ color: '#259388' }}> {inputs.HospitalName}</span>
              </h3>
              <h3 className="m-5 ">
              Hospital Contact Number:
                <span style={{ color: '#259388' }}> {inputs.HospitalContactNo}</span>
              </h3>
              <h3 className="m-5 ">
              Hospital Email: 
                <span style={{ color: '#259388' }}>  {inputs.HospitalEmailId}</span>
              </h3>
              <h3 className="m-5 ">
              User Name:
                <span style={{ color: '#259388' }}> {inputs.UserName}</span>
              </h3>

              
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ShowHospitalProfile;
