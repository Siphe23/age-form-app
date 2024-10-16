import React, { useState } from 'react';
import Logo from "./images/icon-arrow.svg";
import './App.css';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [outputDay, setOutputDay] = useState('--');
  const [outputMonth, setOutputMonth] = useState('--');
  const [outputYear, setOutputYear] = useState('--');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'day':
        setDay(value);
        break;
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;
      default:
        break;
    }
  };

  const validateInputs = () => {
    let valid = true;

    if (+day > 31 || +day <= 0) {
      valid = false;
    }
    if (+month > 12 || +month <= 0) {
      valid = false;
    }
    if (+year <= 0 || +year > 2023) {
      valid = false;
    }

    setIsValid(valid);
    return valid;
  };

  const calculateDate = () => {
    if (validateInputs()) {
      const birthday = `${month}/${day}/${year}`;
      const birthdayObj = new Date(birthday);
      const ageDiffMill = Date.now() - birthdayObj.getTime();
      const ageDate = new Date(ageDiffMill);
      const ageYears = ageDate.getUTCFullYear() - 1970;
      const ageMonths = ageDate.getUTCMonth();
      const ageDays = ageDate.getUTCDate() - 1; 

      setOutputYear(ageYears);
      setOutputMonth(ageMonths);
      setOutputDay(ageDays);
    } else {
      alert('Error: Invalid inputs');
    }
  };

  return (
    <div className="container">
      <div className="input-flex">
        <div className="input-container">
          <span>Day</span>
          <input type="text" id="day" value={day} onChange={handleInputChange} />
          <small className="error-day"></small>
        </div>
        <div className="input-container">
          <span>Month</span>
          <input type="text" id="month" value={month} onChange={handleInputChange} />
          <small className="error-month"></small>
        </div>
        <div className="input-container">
          <span>Year</span>
          <input type="text" id="year" value={year} onChange={handleInputChange} />
          <small className="error-year"></small>
        </div>
      </div>
      <button className="submit-btn" onClick={calculateDate}>
        <img src={Logo} alt="logo" />
      </button>
      <div className="output">
        <h1><span className="output-year">{outputYear}</span> years</h1>
        <h1><span className="output-month">{outputMonth}</span> months</h1>
        <h1><span className="output-day">{outputDay}</span> days</h1>
      </div>
    </div>
  );
}

export default App;
