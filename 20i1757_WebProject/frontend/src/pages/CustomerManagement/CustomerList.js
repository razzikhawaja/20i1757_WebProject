import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const CustomerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/view_customer");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCustomers();
  }, []);

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
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default CustomerList;
