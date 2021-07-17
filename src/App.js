import React, { useState } from 'react';
import Header from './components/Header';
import AddBudget from './components/AddBudget'
import './App.css';

function App() {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [submitted, setSubmit] = useState(false);

  return (
    <div className="App">
      <Header budgetAmount={budgetAmount} />
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmount} setSubmit={setSubmit} />}
      <div className='addExpense'>Add Expense</div>
    </div>
  );
}

export default App;
