import React from "react";
import Chart from "../Analytics/Charts/Chart";

const MONTHES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const ExpenseChart = (props) => {
  const chartDataPoints = MONTHES.map((month) => {
    return { label: month, value: 0 };
  });
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  
  return <Chart dataPoints={chartDataPoints}/>;
};

export default ExpenseChart;
