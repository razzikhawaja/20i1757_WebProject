import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'; 
const TourList = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:3000/view_tour', {
        headers: {
          token: token,
        },
      })
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []); 

  return (
    <>
      <div className="main">
        <h1>{data.length} Tours</h1>
        <div className="center">
          {data.map((element) => (
            <div className="first" key={element._id}>
              <h3 className="second">{element.packageName}</h3>
              <div className="third"><label>Location: </label>{element.location}</div>
              <div className="fifth"><label>Price: </label>{element.amount}</div>
              <div className="seventh"><label>Duration: </label>{element.duration}</div>
              {}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourList;
