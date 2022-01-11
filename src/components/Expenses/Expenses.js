import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import FilterExpenses from "./FilterExpenses/FilterExpenses";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <>
      <Card className="expenses">
        <FilterExpenses
          selectedYear={filteredYear}
          onFilterYear={filterYearHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
