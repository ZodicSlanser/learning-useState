import React from 'react';
import Signin from '../components/sign';

const SigninPage = () => {
  return (
    <div className="page">
      <h2>Sign In Component</h2>
      <p>This Signin component is another example of a functional component using the useState hook. It shows how we can manage form state in a functional component.</p>
      <Signin />
    </div>
  );
}

export default SigninPage;
