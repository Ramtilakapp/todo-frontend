// src/pages/Login.js

import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  return (
    <div className="login-page">
      <AuthForm type="login" />
    </div>
  );
};

export default Login;

