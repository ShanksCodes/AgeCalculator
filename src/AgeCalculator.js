import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dobDate, setDobDate] = useState('');
  const [calcDate, setCalcDate] = useState('');
  const [age, setAge] = useState(null);

  const handleCalculateAge = () => {
    
    if (!dobDate || !calcDate) {
      alert('Please select both dates.');
      return;
    }


    const dob = new Date(dobDate);
    const calc = new Date(calcDate);
    const ageInMilliseconds = calc - dob;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInWeeks = ageInDays / 7;
    const ageInMonths = ageInDays / 30;
    const ageInYears = ageInDays / 365;

    setAge({
      years: ageInYears.toFixed(2),
      months: ageInMonths.toFixed(2),
      weeks: ageInWeeks.toFixed(2),
      days: ageInDays.toFixed(2),
      hours: ageInHours.toFixed(2),
      minutes: ageInMinutes.toFixed(2),
      seconds: ageInSeconds.toFixed(2)
    });
  };

  return (
    <div className="age-calculator-container">
      <h2>Age Calculator</h2>
      <div className="input-group">
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dobDate}
          onChange={(e) => setDobDate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Age at the date of:</label>
        <input
          type="date"
          value={calcDate}
          onChange={(e) => setCalcDate(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={handleCalculateAge}>Calculate</button>
      </div>
      {age && (
        <div className="result">
          <h3>Age Result</h3>
          <div className="result-text">Age:</div>
          <div>Years: {age.years}</div>
          <div>Months: {age.months}</div>
          <div>Weeks: {age.weeks}</div>
          <div>Days: {age.days}</div>
          <div>Hours: {age.hours}</div>
          <div>Minutes: {age.minutes}</div>
          <div>Seconds: {age.seconds}</div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;

