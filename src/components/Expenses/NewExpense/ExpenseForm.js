import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleState, setTitle] = useState("");
  const [amountState, setAmount] = useState("");
  const [dateState, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     titleState: "",
  //     amountState: "",
  //     dateState: "",
  //   });

  const onChangeTitleHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, titleState: event.target.value };
    // });
    setTitle(event.target.value);
  };

  const onChangeAmountHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, amountState: event.target.value };
    // });
    setAmount(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, dateState: event.target.value };
    // });
    setDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleState,
      amount: amountState,
      date: new Date(dateState),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleState} //added to clear form after submit
            onChange={onChangeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={onChangeAmountHandler}
            value={amountState}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={onChangeDateHandler}
            value={dateState}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
