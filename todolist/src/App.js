import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './pages/Home.js';
import Todolist from './pages/Todolist.js';

const App = () => {
  const name = localStorage.getItem('name');
  return (
    <Router>
      <nav>
        <div className="navbar">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to={`/hello/${name}`}>
            <h2>Todolist</h2>
          </Link>
        </div>
      </nav>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Todolist/:name' component={Todolist}/>
    </Router>
  )
};
export default App;
