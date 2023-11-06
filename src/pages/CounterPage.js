import React from 'react';
import Counter from '../components/counterBeforeHooks';

const CounterPage = () => {
  return (
    <div className="page">
      <h2>Counter Before Hooks</h2>
      <p>This is a demonstration of how state is managed in class components. It's a great way to understand the traditional way of handling state before hooks were introduced.</p>
      <Counter />
    </div>
  );
}

export default CounterPage;
