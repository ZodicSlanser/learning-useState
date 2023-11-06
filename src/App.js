import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import CounterFcPage from './pages/CounterFcPage';
import SigninPage from './pages/SigninPage';
import FormPage from './pages/FormPage';
import AgeCounterPage from './pages/AgeCounterPage';
import ToggleButtonPage from './pages/ToggleButtonPage';

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <header className="App-header">
          <h1>React Hooks</h1>
          <nav>
            <Link to="/counter">Counter</Link>
            <Link to="/counter-fc">Counter with Hooks</Link>
            <Link to="/signin">Signin</Link>
            <Link to="/form">Form</Link>
            <Link to="/age-counter">Age Counter</Link>
            <Link to="/toggle-button">Toggle Button</Link>
          </nav>
          <div className="page-container">
            <Route path="/counter" component={CounterPage} />
            <Route path="/counter-fc" component={CounterFcPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/form" component={FormPage} />
            <Route path="/age-counter" component={AgeCounterPage} />
            <Route path="/toggle-button" component={ToggleButtonPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
