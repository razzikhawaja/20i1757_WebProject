import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const TourAgentList = () => {
  const [data, setData] = useState([]);
  let token = localStorage.getItem("accessToken");
  const navigate = useNavigate(); 
  useEffect(() => {
    axios
      .get("http://localhost:3000/view_tour_agent", {
        headers: {
          Authorization: `Bearer ${token}`,
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

  const handleEdit = (agentEmail) => {
    // Redirect or show a form to edit the agent data
    console.log("Edit agent with Email:", agentEmail); 
    // Redirect to the UpdateTourAgent page with agentEmail as a URL parameter
    navigate(`/update_tour_agent/${agentEmail}`);
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
            Tour Agent List
          </MDBCardTitle>
          <MDBTable align='middle'>
            <MDBTableHead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Address</th>
                <th scope='col'>Role</th>
                <th scope='col'>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {data.map((agent) => (
                <tr key={agent.id}>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{agent.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{agent.email}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{agent.address}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{agent.type}</p>
                  </td>
                  <td>
                    <MDBBtn
                      color='link'
                      rounded
                      size='sm'
                      style={{
                        color: '#333',
                        textDecoration: 'none',
                        padding: '0',
                      }}
                      onClick={() => handleEdit(agent.email)} // Pass agent email to the handleEdit function
                    >
                      Edit
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default TourAgentList;
