import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TourList from "./DashboardManagement/TourList";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


function Home() {
  return (
    <>
      <Navbar /> 
      <div style={{ position: 'relative' }}>
        <MDBCarousel>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
            alt='...'
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                borderRadius: '50%',
                background: 'linear-gradient(to right, #FFC371, #FF5F6D)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                color: '#fff',
                fontSize: '24px',
                textAlign: 'center',
                width: 'fit-content',
              }}
            >
              <div
                style={{
                  padding: '20px',
                  borderRadius: '50%',
                  background: 'linear-gradient(to right, #FFC371, #FF5F6D)',
                  display: 'inline-block',
                }}
              >
                <div
                  style={{
                    padding: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #FFC371, #FF5F6D)',
                    display: 'inline-block',
                  }}
                >
                  Admin Panel
                </div>
              </div>
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='https://mdbootstrap.com/img/new/slides/043.jpg'
            alt='...'
          />
        </MDBCarousel>
      </div>
      <TourList />
      <Footer/>
    </>
  );
}

export default Home;





