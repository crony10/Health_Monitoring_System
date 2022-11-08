import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

const ShowPatientDetails = ({ setAuth }) => {
//   const [temp, setTemp] = useState(0);
//   const [avgHr, setAvgHr] = useState(0);
//   const [spO, setSpo] = useState(0);

  // Backend call for temperature
//   const temperature = (e) => {
//     setInterval(async () => {
//       // console.log(temp);
//       // try {
//       //   const response = await fetch(
//       //     'https://hmsapis1.azurewebsites.net/api/WebAppApis/LatestMeasuredData',
//       //     {
//       //       method: 'GET',
//       //       headers: { 'Content-Type': 'application/json' },
//       //     }
//       //   );
//       //   const parseRes = await response.json();
//       //   console.log(parseRes.field1);
//       //   setTemp(parseRes.field1);
//       //   setAvgHr(parseRes.field2);
//       //   setSpo(parseRes.field3);
//       // } catch (err) {
//       //   console.log(err.message);
//       // }
//     }, 1000);
//   };

//   const removeToken = () => {
//     localStorage.removeItem('token');
//     window.location.reload(false);
//   };

//   useEffect(() => {
//     temperature();
//   }, []);

  return (
    <Fragment>
      <h1>hello</h1>
    </Fragment>
  );
};

export default ShowPatientDetails;
