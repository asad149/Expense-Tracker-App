import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Child from "./Child";

import { TransactionProvider } from "./TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <Child />
      </div>
    </TransactionProvider>
  );
}

export default App;
