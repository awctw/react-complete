import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [titleState, setTitle] = useState(props.title);

  const onClickHandler = () => {
    return setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title!</button>
    </Card>
  );
};

export default ExpenseItem;
