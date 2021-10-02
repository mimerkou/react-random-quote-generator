import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((response) => {
        // console.log(response);
        const { advice } = response.data.slip;
        // console.log(advice);
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h2 className="heading">{advice}</h2>
        <button className="button" onClick={fetchAdvice}>
          <span>Generate Advice</span>
        </button>
      </div>
    </div>
  );
};

export default App;
