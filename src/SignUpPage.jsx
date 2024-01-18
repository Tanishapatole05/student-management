import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setRegistrationMessage('Registration successful. You can now log in.');
      } else {
        const data = await response.json();
        setError(data.detail || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again later.');
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          {registrationMessage && <p className="text-success">{registrationMessage}</p>}
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <MDBInput wrapperClass='mb-4' size='lg' id='name' type='text' onChange={handleChange} value={formData.name} autoComplete="name" />

            <label htmlFor="email">Your Email</label>
            <MDBInput wrapperClass='mb-4' size='lg' id='email' type='email' onChange={handleChange} value={formData.email} autoComplete="email" />

            <label htmlFor="password">Password</label>
            <MDBInput wrapperClass='mb-4' size='lg' id='password' type='password' onChange={handleChange} value={formData.password} autoComplete="new-password" />

            <label htmlFor="confirmPassword">Repeat your password</label>
            <MDBInput wrapperClass='mb-4' size='lg' id='confirmPassword' type='password' onChange={handleChange} value={formData.confirmPassword} autoComplete="new-password" />

            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUpPage;
