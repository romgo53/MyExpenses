import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, onYearSelect] = useState("2021");
  const yearFilterHandler = (year) => {
    onYearSelect(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return selectedYear === expense.date.getFullYear().toString();
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearFilter={yearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
