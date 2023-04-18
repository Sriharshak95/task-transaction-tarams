import React from "react";
import "./App.css";
import TransactionTable from "./pages/transactions";

const App: React.FC = () => {
  return (
    <div className="App">
      <TransactionTable />
    </div>
  );
};

export default App;
