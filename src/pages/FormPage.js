import React from 'react';
import Form from '../components/form';

const FormPage = () => {
  return (
    <div className="page">
      <h2>Form Component: Functional Component and useState Hook</h2>
      <p>This Form component is an example of how we can handle form inputs using the useState hook in a functional component. It demonstrates how to capture and manage user input in a stateful, reactive way.</p>
      <Form />
    </div>
  );
}

export default FormPage;
