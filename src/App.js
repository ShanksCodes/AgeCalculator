import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { Login } from './loginC';
import AgeCalculator from './AgeCalculator';



const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/age" element={<AgeCalculator />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;


