import React, { useState } from 'react';
import Header from './components/Header';
import AddBudget from './components/AddBudget'
import './App.css';

function App() {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [submitted, setSubmit] = useState(false);
  const [editBudget, setEditBudget] = useState(false);

  const showEditBudget = (e) => {
    setEditBudget(true);
  }

  //TODO: Move editBudget UI into its own component so it doesnt mess with the styling of the original form budget amount

  return (
    <div className="App">
      <Header budgetAmount={budgetAmount} />
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmount} setSubmit={setSubmit} setEditBudget={setEditBudget} />}
      <div className='buttonWrapper'>
        {submitted && <div className='buttonUI'>Add Expense</div>}
        {submitted && <div className='buttonUI' onClick={showEditBudget}>Edit Budget</div>}
      </div>
      {editBudget && <AddBudget setBudgetAmount={setBudgetAmount} setSubmit={setSubmit} setEditBudget={setEditBudget} />}
    </div>
  );
}

export default App;
