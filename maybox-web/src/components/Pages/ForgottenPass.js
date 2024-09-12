import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Password reset email sent successfully. Please check your inbox.');
        setError('');  
      })
      .catch((err) => {
        setError(err.message);
        setMessage('');  
      });
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <form onSubmit={handleForgotPassword}>
        <label htmlFor="email">Enter your email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        <button type="submit" className="submit-button">
          Send Reset Email
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
