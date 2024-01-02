import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const BlockCustomer = () => {
  const [data, setData] = useState([]);
  let token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('http://localhost:3000/view_customer', {
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

  const handleBlock = (customerEmail) => {
    axios
      .post(
        'http://localhost:3000/block_customer',
        {
          email: customerEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        // Remove the blocked customer from the data array
        const updatedData = data.filter((customer) => customer.email !== customerEmail);
        setData(updatedData);
      })
      .catch(function (err) {
        console.log(err);
      });
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
            Customer List
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
              {data.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{customer.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{customer.email}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{customer.address}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{customer.type}</p>
                  </td>
                  <td>
                    <MDBBtn
                      color='danger'
                      rounded
                      size='sm'
                      style={{
                        color: '#fff',
                        textDecoration: 'none',
                        padding: '0',
                      }}
                      onClick={() => handleBlock(customer.email)} // Pass customer email to the handleBlock function
                    >
                      Block
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

export default BlockCustomer;
