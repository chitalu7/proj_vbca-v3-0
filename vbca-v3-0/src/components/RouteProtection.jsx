import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect them to the login page, but save the current location they were trying to go to
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;