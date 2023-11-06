import React from 'react';
import ToggleButton from '../components/toggleButton';

const ToggleButtonPage = () => {
  return (
    <div className="page">
      <h2>Toggle Button: Functional Component and useState Hook</h2>
      <p>This ToggleButton component demonstrates a simple use case of the useState hook in a functional component to manage the state of a button.</p>
      <ToggleButton />
    </div>
  );
}

export default ToggleButtonPage;
