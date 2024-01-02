import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"; 
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
    <footer className="text-center text-white" style={{ backgroundColor: '#caced1' }}>
      <div className="container p-4">
        <section className="">
          <div className="row">
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
      <figure className='figure'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp'
        className='figure-img img-fluid rounded shadow-3 mb-3'
        alt='...'
      />
    </figure>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
    <figure className='figure'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp'
        className='figure-img img-fluid rounded shadow-3 mb-3'
        alt='...'
      />
    </figure>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <figure className='figure'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp'
        className='figure-img img-fluid rounded shadow-3 mb-3'
        alt='...'
      />
    </figure>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            
            <figure className='figure'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp'
        className='figure-img img-fluid rounded shadow-3 mb-3'
        alt='...'
      />
    </figure>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
        <figure className='figure'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp'
        className='figure-img img-fluid rounded shadow-3 mb-3'
        alt='...'
      />
    </figure>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
    <figure className='figure'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp'
        className='figure-img img-fluid rounded shadow-3 mb-3'
        alt='...'
      />
    </figure>
            </div>
    </div>
        </section>
      </div>       
    </footer>
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='#'>
          AdminPanel
        </a>
      </div>
    </MDBFooter>
    </>
  );
}

export default Footer;
