import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
    setisEditing(false)
  };

  const isEditingHandler = () => {
    setisEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing ? 
        <button onClick={isEditingHandler}>Add New Expense</button>
       : 
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onShow={isEditingHandler}
        />
      }
    </div>
  );
};

export default NewExpense;
