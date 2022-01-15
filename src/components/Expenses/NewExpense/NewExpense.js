import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const startAddingHandler = () => {
    setFormState(
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={onCancelHandler}
      />
    );
  };

  const [formState, setFormState] = useState(
    <form>
      <button onClick={startAddingHandler}>Add New Expenses.</button>
    </form>
  );

  const onCancelHandler = () => {
    setFormState(
      <form>
        <button onClick={startAddingHandler}>Add New Expenses.</button>
      </form>
    );
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveNewExpenses(expenseData);

    setFormState(
      <form>
        <button onClick={startAddingHandler}>Add New Expenses.</button>
      </form>
    );
  };

  return <div className="new-expense">{formState}</div>;
};

export default NewExpense;
