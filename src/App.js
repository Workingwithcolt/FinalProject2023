import logo from './img/logo.png';
import './App.css';
import "./css/bootstrap.min.css"
import "./css/style.css";
import "./css/carousel.css";
import { Route, Routes, Switch, Link, redirect, Navigate, useNavigate } from 'react-router-dom';
import { Login } from "./component/Login/Login";
import { Register } from "./Register";
import LoginBar from './component/loginbar/LoginBar';
import { Docter } from "./component/Doctor/Docter"

// import Patient from "./component/Patients/Patient"
import { Patient_Detail_Docter_Side } from "./component/Detail_Docter/Patient_Detail_Docter_Side"
import { Patient_Self } from './component/Patient_Self.js/Patient_Self';
import { useContext } from 'react';
import { useState } from 'react';
import { Patient } from './component/Patients/Patient';
import { LoginContext, LoginInfoContext } from './component/LoginContext/DataContext';
import { logout } from './component/ContractMethod';
import { useEffect } from 'react';
import Logout from './component/Logout/logout';
import { PharmLogin } from './component/Pharmacist/PharmLogin';
import { PatOtp } from './component/Pharmacist/PatOtp';
import { PharmPrescription } from './component/Pharmacist/PharmPrescription';
import { AddPatientByDoctor } from './component/Docter_old/AddPatientByDoctor';


function App(props) {
  const navigate = useNavigate()
  const id = 23
  const { data, Access, SetAccess, CurrentAccount, SetCurrentAccount } = useContext(LoginInfoContext)

  const handleChange = () => {
    logout()
    SetCurrentAccount("Account")
    SetAccess(false)
    navigate("/")
  } 
  const i = require('./img/medicine.png')
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  // console.log(data)

  return (
    <div className='start'>
      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
              <img src={logo} className="logoImg" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active"><Link to="/">Home</Link></a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <a href="price.html" className="nav-item nav-link">Contact</a>
                <Logout handleChange={handleChange} Access={Access}/>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/"
          element={
            <LoginContext>
              <LoginBar />
            </LoginContext>
          } />

        <Route
          path="/registers/docter"
          element={
            <LoginContext>
              <Login name={"Doctor"} />
            </LoginContext>
          } />

<Route
          path="/registers/pharmasist"
          element={
            <LoginContext>
              <PharmLogin name={"pharmasist"} />
            </LoginContext>
          } />

          <Route
          path="/pharmasist/patotp/"
          element={
              <PatOtp/>
          } />
          
        <Route
          path="/registers/patient"
          element={
            <LoginContext>
              <Login name={"Patient"} />
            </LoginContext>
          } />

<Route
          path="/login/Docter/addPatient/"
          element={
            <LoginContext>
              <AddPatientByDoctor/>
            </LoginContext>
          } />

       <Route
          path="/pharmacist/pharmprescription/"
          element={
            <LoginContext>
              < PharmPrescription/>
            </LoginContext>
          } />
        <Route
          path="/registers/pharmasist"
          element={
            <LoginContext>
              <Login name={"Pharmasist"} />
            </LoginContext>
          } />

        <Route
          path="/login/Doctor"
          element={
            <LoginContext>
              <Docter />
            </LoginContext>
          } />

        <Route
          path="/login/Patient"
          element={
            <LoginContext>
              <Patient_Self />
            </LoginContext>
          } />
        <Route
          path="/login/Pharmasist"
          element={<Patient />
          } />

        <Route path={`/login/Docter/patient`} element={<LoginContext><Patient_Detail_Docter_Side  /></LoginContext>} /> 
      </Routes>


      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
              <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
              <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />info@example.com</p>
              <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3" />+012 345 67890</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Home</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />About Us</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Our Services</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Meet The Team</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Latest Blog</a>
                <a className="text-light" href="#"><i className="fa fa-angle-right me-2" />Contact Us</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Home</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />About Us</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Our Services</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Meet The Team</a>
                <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Latest Blog</a>
                <a className="text-light" href="#"><i className="fa fa-angle-right me-2" />Contact Us</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className='image1'>
                <img src={i} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">© <a className="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed by <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </div>

  );
}

export default App;
