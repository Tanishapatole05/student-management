// PasswordResetCard.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordResetCard = () => {
  const [email, setEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);

  const handleResetPassword = () => {
    setResetRequested(true);
  };

  return (
    <div className="card text-center" style={{ width: '300px' }}>
      <div className="card-header h5 text-white bg-primary">Password Reset</div>
      <div className="card-body px-5">
        {resetRequested ? (
          <p className="card-text py-2">
            An email with instructions to reset your password has been sent to {email}.
          </p>
        ) : (
          <>
            <p className="card-text py-2">
              Enter your email address and we'll send you an email with instructions to reset your password.
            </p>
            <div className="form-outline">
              <input
                type="email"
                id="typeEmail"
                className="form-control my-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label" htmlFor="typeEmail">
                Email input
              </label>
            </div>
            <button className="btn btn-primary w-100" onClick={handleResetPassword}>
              Reset password
            </button>
          </>
        )}
        <div className="d-flex justify-content-between mt-4">
          <Link to="/" className="">Login</Link>
          <Link to="/signup" className="">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetCard;
