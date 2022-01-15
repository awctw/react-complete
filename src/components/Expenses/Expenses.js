import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onFilterExpensesHandler = (chosenYear) => {
    setFilteredYear(chosenYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenses={onFilterExpensesHandler}
        />
        <ExpensesChart expense={filteredExpenses} />
        <ExpensesList filteredList={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
