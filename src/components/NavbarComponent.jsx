import { Button, Row, Col, Nav, Navbar, NavbarBrand } from "reactstrap";
import React from "react";
import { DonateModal } from "../forms/DonateModal";

function NavbarComponent() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark sticky-top'>
        <div className='container'>
          <a href='/' className='navbar-brand '>
            <img className='nav-logo' src='/assets/images/logo7.png' alt='logo' />
            Neighbor First
          </a>

          <div className='row'>
            <div className='col-12 my-auto text-center'>
              <Button 
                
                className='btn btn-info text-wrap'
              >
                Donate Now
              </Button>
            </div>
          </div>

          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a href='index.html' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='about.html' className='nav-link'>
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                <a href='donation.html' className='nav-link'>
                  Donations
                </a>
              </li>
              <li className='nav-item'>
                <a href='contact.html' className='nav-link'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavbarComponent;
