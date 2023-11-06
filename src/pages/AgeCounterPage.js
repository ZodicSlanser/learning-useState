import React from 'react';
import AgeCounter from '../components/age';

const AgeCounterPage = () => {
  return (
    <div className="page">
      <h2>Age Counter Component: Functional Component and useState Hook</h2>
      <p>The Age Counter component is a practical example of using the useState hook in a functional component. It demonstrates how we can increment a value (in this case, age) and reflect that change in the UI in real-time.</p>
      <AgeCounter />
    </div>
  );
}

export default AgeCounterPage;
