import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formState, changeFormState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const handleFormStateChange = () => {
    changeFormState((prevState) => {
      if (prevState === false) {
        return true;
      } else {
        return false;
      }
    });
  };

  if (formState === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formStateHandler={handleFormStateChange}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={handleFormStateChange}>Add new expense</button>
    </div>
  );
};

export default NewExpense;
