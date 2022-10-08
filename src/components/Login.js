import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    UserName: '',
    Password: '',
  });

  const { UserName, Password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(e);
  };
  // const setLoginAuth = (auth)=>{
  //   console.log(auth);
  //   setAuth.setAuth(auth);
  // }
  const onSubmitForm = async (e) => {
    e.preventDefault();

    // backend
    try {
      const body = { UserName, Password };

      // console.log(body.UserName);
      // console.log(body.Password);

      const response = await fetch('https://hmsapis1.azurewebsites.net/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: body.UserName,
          password: body.Password,
          grant_type: 'password',
        }),
      });

      const parseRes = await response.json(); // token chhe aa var ma
      console.log(parseRes);

      if (parseRes.access_token) {
        // localStorage.setItem("token", parseRes.jwtToken);
        // setLoginAuth(true);
        // setAuth(true);
        console.log(parseRes);
        // toast.success("Logged in Successfully");
        toast.success('Logged in Successfully', {
          position: toast.POSITION.TOP_CENTER,
        });

        localStorage.setItem('token', JSON.stringify('this is token'));
        window.location.reload(false);
      } else {
        // setLoginAuth(false);
        // setAuth(false);
        // toast.error(parseRes);
        toast.error(parseRes, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5">Login</h1>
      <form onSubmit={onSubmitForm}>
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
          <Link to="/signup_login/register">register</Link>
        </div>
        <Link  to="/signup_login/" >home page</Link>
      </form>
      {/* <button onClick={() => setAuth(true)}>Authenticate</button> */}
    </Fragment>
  );
};

export default Login;
// temp comment to deploy