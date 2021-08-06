import React, { useState } from "react";
import "./date-data.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DateData = (props) => {
  const [radio, setRadio] = useState("No due date");

  const [singleDate, setSingleDate] = useState();
  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();

  const [hideSpecificDayText, setHideSpecificDayText] = useState(true);
  const [hideMultiDayText, setHideMultiDayText] = useState(true);

  return (
    <div className="radio-wrapper">
      <div className="radio-container">
        <input
          type="radio"
          checked={radio === "no-issue-date"}
          value="no-issue-date"
          onClick={() => {
            setHideSpecificDayText(true);
            setHideMultiDayText(true);
          }}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        <label>No Issue Date</label>
      </div>
      {/* br */}
      <div className="radio-container">
        <input
          type="radio"
          checked={radio === "a-specific-day"}
          value="a-specific-day"
          onClick={() => {
            setHideSpecificDayText(false);
            setHideMultiDayText(true);
          }}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        {hideSpecificDayText ? (
          <label className="assignsto-box">A specific day</label>
        ) : null}

        {radio === "a-specific-day" && (
          <DatePicker
            dateFormat="dd/MM"
            selected={singleDate}
            onChange={(date) => {
              setSingleDate(date);
            }}
          />
        )}
      </div>
      <div className="radio-container">
        <input
          type="radio"
          checked={radio === "for-multiple-days"}
          value="for-multiple-days"
          onClick={() => {
            setHideSpecificDayText(true);
            setHideMultiDayText(false);
          }}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        {hideMultiDayText ? (
          <label className="for-multiple-days">Runs for multiple days</label>
        ) : null}
        {radio === "for-multiple-days" && (
          <div className="picker-input">
            <DatePicker
              dateFormat="dd/MM"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="m-top"
            />
            <DatePicker
              dateFormat="dd/MM"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="m-top"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateData;
