import React, { useContext, useState } from "react";
import { TransactionContext } from "./TransactionContext";

const Child = () => {
  let { transactions, addTransaction } = useContext(TransactionContext);

  let [newAmount, setAmount] = useState(0);
  let [newDesc, setDesc] = useState("");

  const handleAddition = (event) => {
    event.preventDefault();

    if (Number(newAmount) === 0) {
      alert("Please Enter Valid Value");
      return false;
    }

    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
  };

  function getIncome() {
    let income = 0;

    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount;
      }
    }
    return income;
  }

  function getExpense() {
    let expense = 0;

    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += transactions[i].amount;
      }
    }
    return expense;
  }

  return (
    <div>
      <div className="container">
        <div className="header">
          <h4>Expense Tracker</h4>
        </div>

        <div className="balance ">
          <p>Your Balance</p>
          <h2 className="balance-amount">${getIncome() + getExpense()}.00</h2>
        </div>
        <div className="expense-container col-12">
          <p>
            INCOME <br />
            <span className="income">${getIncome()}.00</span>
          </p>
          <p>
            EXPENSE <br />
            <span className="expense">${Math.abs(getExpense())}.00</span>
          </p>
        </div>

        <div className="transaction-history">
          <h5>History</h5>
          <hr />
        </div>

        <ul className="trnsaction-list">
          {transactions.map((transObj, ind) => {
            return (
              <li
                className={transObj.amount > 0 ? "text-success" : "text-danger"}
                key={ind}
              >
                <span>{transObj.desc}</span>
                <span>${Math.abs(transObj.amount)}.00</span>
              </li>
            );
          })}
        </ul>

        <div className="transaction-history">
          <h5>Add New Transaction</h5>
          <hr />
        </div>

        <div className="trans-form">
          <form className="transaction-form" onSubmit={handleAddition}>
            <input
              placeholder="Enter Description"
              type="text"
              onChange={(ev) => setDesc(ev.target.value)}
              className="form-control"
              required
            />
            <p>
              Amount <br />
              (negative - expense, positive - income)
            </p>
            <input
              type="number"
              placeholder="0"
              onChange={(ev) => setAmount(ev.target.value)}
              className="form-control"
              required
            />
            <input
              type="submit"
              value="Add New Transaction"
              className="btn  btn-submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Child;
