/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
const auth = useSelector((state) => state.auth)
const location = useLocation();

  return (
    auth?.isLoggedIn
      ? children
      : <Navigate to="/register" state={{ from:location}} replace />
  );
};

export default RequireAuth;
