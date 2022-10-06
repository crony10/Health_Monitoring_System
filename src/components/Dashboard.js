import React, { Fragment } from "react";
// import { toast } from "react-toastify";


const removeToken=()=>{
  localStorage.removeItem('token');
  window.location.reload(false);
}
const Dashboard = ({setAuth}) => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <button onClick={()=>removeToken()}>Logout</button>
    </Fragment>
  );
};

export default Dashboard;
