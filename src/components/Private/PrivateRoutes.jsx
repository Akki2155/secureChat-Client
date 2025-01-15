import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  
  const isAuthenticated=useSelector((state)=> state.authReducer.isAuthenticated);
  const isLoggedIn = !!localStorage.getItem('token'); 
  
  return isLoggedIn ? children : <Navigate to="/"/>;
};

export default PrivateRoute;
