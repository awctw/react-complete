import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 29 2021</div>
      <div className="expense-item_description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">99.11</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
