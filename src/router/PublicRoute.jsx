import { useAuth } from 'hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ element, restricted }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn && restricted ? <Navigate to="/contacts" /> : element;
}
