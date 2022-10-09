import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = ({ setAuth }) => {
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

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(e);
  };

  const setRegisterAuth = (auth) => {
    console.log(auth);
    setAuth(auth);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // Backend call by clicking submit button

    try {
      const body = {
        HospitalName,
        HospitalContactNo,
        HospitalEmailId,
        UserName,
        Password,
      };

      const response = await fetch(
        'https://hmsapis1.azurewebsites.net/api/WebAppApis/UserRegistration',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      // const parseRes = await response.json();
      // console.log(parseRes);

      const parseRes = await response.json();
      // console.log(parseRes);
      // toast.success("Register Successfully");
      // setAuth(true);
      if (parseRes === 'Sucess') {
        console.log(parseRes + 'HELLO');
        // toast.success("Register Successfully");
        toast.success('Register Successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
        // setRegisterAuth(true);
        localStorage.setItem('token', JSON.stringify('this is token'));
        window.location.reload(false);
      } else {
        // setRegisterAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
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
        <div>
          <Link to="/signup_login/login/">login</Link>
        </div>
        <div>
          <Link to="/signup_login/">home page</Link>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
