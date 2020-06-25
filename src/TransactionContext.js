import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

let initialTransactions = [];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
        id: transObj.id,
      },
    });
  }

  function deleteTransaction(transObj) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: {
        id: transObj.index,
      },
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
