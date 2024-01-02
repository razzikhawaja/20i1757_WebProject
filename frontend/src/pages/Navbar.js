import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn
} from "mdb-react-ui-kit";

const Navbar = () => {
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  const navigate = useNavigate();
  let token = localStorage.getItem("accessToken");
  const decodedToken = jwt_decode(token);
  const type = decodedToken.type;
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const toggleNavColorThird = () => {
    setShowNavColorThird(!showNavColorThird);
  };

  return (
    <>
      {type === "admin" && (
        <MDBNavbar expand="lg" light className="navbar-custom">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">Adminatory</MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavColorThird}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorThird} navbar>
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="active">
                  <Link className="nav-link" to="/dashboard" >
                    Dashboard
                  </Link>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link nav-link-effect"
                      role="button"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Customer Management
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/view_customer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          View
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/block_customer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Block
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/delete_customer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Delete
                        </Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link nav-link-effect"
                      role="button"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Tour Agent Management
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/view_tour_agent" style={{ textDecoration: 'none', color: 'inherit' }}>
                          View
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/delete_tour_agent" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Delete
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/create_tour_agent" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Register
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link className="dropdown-item" to="/users/block_tour_agent" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Block
                        </Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBBtn
                  outline
                  color="success"
                  className="ms-auto nav-link-effect"
                  type="button"
                  onClick={handleLogout}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Sign Out
                </MDBBtn>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      )}
    </>
  );
};

export default Navbar;
