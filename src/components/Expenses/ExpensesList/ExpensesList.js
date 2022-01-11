import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no items</h2>;
  }

  if (items.length > 0) {
    return (
      <ul className="expenses-list">
        {items.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
