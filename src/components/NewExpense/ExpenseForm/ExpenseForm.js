import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredDate, setEntredDate] = useState("");
  const [entredAmount, setEntredAmount] = useState("");

  const changeTitleHandler = (event) => {
    setEntredTitle(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEntredDate(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setEntredAmount(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entredTitle,
      amount: +entredAmount,
      date: new Date(entredDate),
    };
    props.onSaveExpenseData(expenseData)
    setEntredTitle('')
    setEntredDate('')
    setEntredAmount('')
  };
  return ( 
  
    <form onSubmit={formSubmitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label className="new-expense__control label">Title</label>
        <input type="text" value={entredTitle} onChange={changeTitleHandler} />
      </div>
      <div className="new-expense__control">
        <label className="new-expense__control label">Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={entredAmount}
          onChange={changeAmountHandler}
        />
      </div>
      <div className="new-expense__control">
        <label className="new-expense__control label">Date</label>
        <input
          type="date"
          min="01-01-2019"
          max="12-31-2022"
          value={entredDate}
          onChange={changeDateHandler}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="reset" onClick={props.onShow}>Cancel</button>
      <button type="submit">Add expense</button>
    </div>
  </form> 
  );
};

export default ExpenseForm;
