import React, { Fragment } from "react";
// import { toast } from "react-toastify";

const Dashboard = ({setAuth}) => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <button onClick={()=>setAuth(false)}>Logout</button>
    </Fragment>
  );
};

export default Dashboard;
