import React from 'react';
import CounterFc from '../components/counterAfterHooks';

const CounterFcPage = () => {
  return (
    <div className="page">
      <h2>Counter with Hooks</h2>
      <p>This counter is implemented using a functional component and the useState hook. It's a modern and simpler way to manage state in React.</p>
      <CounterFc />
    </div>
  );
}

export default CounterFcPage;
