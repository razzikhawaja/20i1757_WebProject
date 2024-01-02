import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        const result = response.data;
        const { type, message } = result;
        console.log("Role:", type);

        localStorage.setItem("accessToken", response.data.accessToken);

        if (type === "admin") {
          console.log("Navigating to homescreen");
          navigate("/dashboard");
        } else {
          alert("Invalid Credentials!");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section
        className="vh-100 gradient-bg"
        style={{
          background:
            "linear-gradient(45deg, #4b6cb7, #182848)"
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" id="card">
                <div className="card-body p-5 text-center">
                  <div
                    className="border border-gradient rounded p-2 mb-4"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))",
                    }}
                  >
                    <h3 className="mb-0">
                      <i className="bi bi-shield-lock-fill me-2"></i>
                      Admin Panel
                    </h3>
                  </div>

                  <h5 className="mb-5">Sign in</h5>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label">
                      Remember password
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={checkLogin}
                  >
                    Login
                  </button>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
