import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    hospitalName: "",
    hospitalContactNumber: "",
    hospitalEmail: "",
    userName: "",
    password: "",
  });

  const {
    hospitalName,
    hospitalContactNumber,
    hospitalEmail,
    userName,
    password,
  } = inputs;

  const onChange = (e) =>{
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(e);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // This is the sample backend code for postgres db and node js as backdend
    // try {
    //   const body = { email, password, name };
    //   const response = await fetch(
    //     "http://localhost:5000/authentication/register",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json"
    //       },
    //       body: JSON.stringify(body)
    //     }
    //   );
    //   const parseRes = await response.json();

    //   if (parseRes.jwtToken) {
    //     localStorage.setItem("token", parseRes.jwtToken);
    //     setAuth(true);
    //     toast.success("Register Successfully");
    //   } else {
    //     setAuth(false);
    //     toast.error(parseRes);
    //   }
    // } catch (err) {
    //   console.error(err.message);
    // }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="hospitalName"
          value={hospitalName}
          placeholder="Hospital Name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="number"
          name="hospitalContactNumber"
          value={hospitalContactNumber}
          placeholder="Hospital Contact Number"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="hospitalEmail"
          value={hospitalEmail}
          placeholder="Hospital Email"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />

        <input
          type="text"
          name="userName"
          value={userName}
          placeholder="User Name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />

        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/login">login</Link>
    </Fragment>
  );
};

export default Register;
