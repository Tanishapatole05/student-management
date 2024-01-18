import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import LoginCard from './LoginCard';
import SignUpPage from './SignUpPage';
import PasswordResetCard from './PasswordResetCard';
import './Dashboard.css';
import StudentDetails from './StudentDetails';
import CourseTable from './CourseTable';
import HelpPage from './HelpPage';
import RatingPage from './RatingPage'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    console.log('Login with:', credentials);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginCard handleLogin={handleLogin} />}
          />
          <Route
            path="/dashboard/*"
            element={
              isLoggedIn ? (
                <>
                  <Header handleLogout={handleLogout} />
                  <Sidebar />
                  <Home />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/students/*"
            element={
              isLoggedIn ? (
                <>
                  <Header handleLogout={handleLogout} />
                  <Sidebar />
                  <StudentDetails />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/courses/*"
            element={
              isLoggedIn ? (
                <>
                  <Header handleLogout={handleLogout} />
                  <Sidebar />
                  <CourseTable />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/reset-password" element={<PasswordResetCard />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/rating" element={<RatingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
