import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Navbar from "../Navbar";

function RegisterTourAgent()
{
    const[name,setname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[address,setAddress]=useState("")
    const[type,settype]=useState("")

    const navigate = useNavigate(); 
    const signup = () => {
        axios
          .post("http://localhost:3000/create_tour_agent", {
            
            name: name,
            email: email,
            password: password,
            address:address,
            type:type
          })
          .then((response) => {
            console.log(response);
            const result = response.data; 
            alert('Hurray! Added Successfully!')
            navigate('/view_tour_agent'); 
            
          })
          .catch(function (err) {
            alert('Invalid Credentials!'); 
            console.log(err);
          });
      };
    return(
      
    <>
    <Navbar />
<section className="vh-100 gradient-bg" 
style={{
  background:
    "linear-gradient(45deg, #4b6cb7, #182848)"
}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" id="card">
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign up</h3>

            

            <div className="form-outline mb-4">
              <input type="text"  className="form-control form-control-lg" placeholder="name"  value={name} onChange={(e)=> setname(e.target.value)} />
              
            </div>


            <div className="form-outline mb-4">
              <input type="email"  className="form-control form-control-lg" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
              
            </div>

            <div className="form-outline mb-4">
              <input type="password"  className="form-control form-control-lg" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              
            </div>
            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" placeholder="Address"  value={address} onChange={(e)=> setAddress(e.target.value)} />
              
            </div>

            <div className="form-outline mb-4">
              <input type="email"  className="form-control form-control-lg" placeholder="type" value={type} onChange={(e)=> settype(e.target.value)}/>
              
            </div>


            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={signup} >Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
    )
}

export default RegisterTourAgent;