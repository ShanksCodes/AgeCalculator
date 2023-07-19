import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="form-container">
      <h1 style={{ textAlign: 'center', color: 'rgb(59, 87, 68)' }}>Age Calculator</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/age">Age calculator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;



