import { useState } from "react";
import "./App.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <>
      <h1>Date Picker</h1>
      <div className="date-picker">
        <div className="date-container">
          <label>Start Date:</label>
          <ReactDatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            maxDate={endDate}
          />
        </div>
        <div className="date-container">
          <label>End Date:</label>
          <ReactDatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            disabled={startDate === null}
          />
        </div>
      </div>
    </>
  );
}

export default App;
