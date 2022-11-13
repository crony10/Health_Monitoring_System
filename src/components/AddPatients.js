import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import addPatient from '../assets/addPatient.svg';

const AddPatients = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    PatientName: '',
    ContactNo: '',
    ChannelId: '',
  });

  const { PatientName, ContactNo, ChannelId } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(e);
  };

  // const setRegisterAuth = (auth) => {
  //   console.log(auth);
  //   setAuth(auth);
  // };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // setInputs('');

    // Backend call by clicking submit button

    try {
      const body = {
        PatientName,
        ContactNo,
        ChannelId,
      };

      const response = await fetch(
        'https://hmsapis1.azurewebsites.net/api/PatientApis/PatientRegistration',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();
      if (parseRes === 'Sucess') {
        console.log(parseRes + 'HELLO');
        toast.success('Register Successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
        // e.target.reset();
        setInputs({ PatientName: '', ContactNo: '', ChannelId: '' });
        // localStorage.setItem('token', JSON.stringify('this is token'));
        // window.location.reload(false);
      } else {
        toast.error('User already exist!', {
          position: toast.POSITION.TOP_CENTER,
        });
        // toast.error(parseRes);
      }
    } catch (err) {
      console.log(err.message);
    }
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
            <img width="200px" src={addPatient} alt="add patients" />
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
                  to="/signup_login/dashboard/ShowPatients"
                  className="btn text-light btn-lg text-sm-start rounded-pill"
                  style={{
                    background: '#35CBBD',
                  }}
                >
                  Show Patient Detail
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

      {/* Form  */}
      {/* <h1 className="mt-5 text-center">Add Patients</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="PatientName"
          value={PatientName}
          placeholder="Patient Name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="ContactNo"
          value={ContactNo}
          placeholder="Contact Number"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="ChannelId"
          value={ChannelId}
          placeholder="Channel Id"
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
                width: '100%',
              }}
            >
              <h1 className="mt-5 text-center">Add Patient</h1>
              <form onSubmit={onSubmitForm} className="m-5 was-validated">
                <input
                  type="text"
                  name="PatientName"
                  value={PatientName}
                  placeholder="Patient Name"
                  onChange={(e) => onChange(e)}
                  className="form-control my-3"
                />
                <input
                  type="text"
                  name="ContactNo"
                  value={ContactNo}
                  placeholder="Contact Number"
                  onChange={(e) => onChange(e)}
                  className="form-control my-3"
                />
                <input
                  type="text"
                  name="ChannelId"
                  value={ChannelId}
                  placeholder="Channel Id"
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
                    Add Patient
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AddPatients;
