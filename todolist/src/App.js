import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Hello from './pages/Hello.js';

const App = () => {
  const name = localStorage.getItem('name');
  return (
    <Router>
      <nav>
        <div className="navbar">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to={`/hello/${name}`}>
            <h2>Hello</h2>
          </Link>
        </div>
      </nav>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/Hello/:name' component={Hello}/>
    </Router>
  )
};
export default App;
