import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const UpdateTourAgent = () => {
  const [agentData, setAgentData] = useState({});
  const { email } = useParams();
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://localhost:3000/view_tour_agent/${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAgentData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAgentData();
  }, [email]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('accessToken');
      await axios.put(`http://localhost:3000/update_tour_agent/${email}`, agentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Updated Successfully!');
      navigate('/view_tour_agent');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setAgentData({ ...agentData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <MDBCard
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          padding: '20px',
          margin: '20px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <MDBCardBody>
          <MDBCardTitle
            style={{
              fontWeight: 'bold',
              fontSize: '24px',
              marginBottom: '20px',
            }}
          >
            Edit Tour Agent
          </MDBCardTitle>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={agentData.name || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={agentData.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={agentData.password || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={agentData.address || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={agentData.type || ''}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default UpdateTourAgent;
