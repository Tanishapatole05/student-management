// LoginCard.jsx

import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginCard({ handleLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    const loginRequest = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    loginRequest.then(() => {
      handleLogin({ email, password });

      
      navigate('/dashboard');
    });
  };

  return (
    <MDBContainer fluid className="container">
      <MDBRow className='d-flex align-items-center justify-content-center h-100'>
        <MDBCol lg='6' md='8' sm='10'>
          <MDBCard className='card' style={{ backgroundColor: '#343a40', color: 'white' }}>
            <MDBCardBody className='card-body'>
              <h2 className="card-title">Login</h2>
              <p className="card-subtitle">Please enter your login and password!</p>

              <div>
                <MDBInput
                  wrapperClass='form-input'
                  labelClass='text-white'
                  label='Email address'
                  id='formControlLg'
                  type='email'
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <MDBInput
                  wrapperClass='form-input'
                  labelClass='text-white'
                  label='Password'
                  id='formControlLg'
                  type='password'
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <p className="small mb-3 pb-lg-2">
                <Link to="/signup" className="text-white-50">Don't have an account? Sign Up</Link>
              </p>

              <MDBBtn outline className='btn-login' color='white' size='lg' onClick={handleClick}>
                Login
              </MDBBtn>

              <div className='d-flex flex-row social-buttons'>
              </div>

              <div className='text-center'>
                <p className="sign-up-link">
                  Forgot password? <Link to="/reset-password" className="text-white-50 fw-bold">Reset Password</Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginCard;
