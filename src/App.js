import React, { useState } from 'react';
import Header from './components/Header';
import Budget from './components/Budget';
import AddBudget from './components/AddBudget'
import EditBudget from './components/EditBudget';
import AddExpense from './components/AddExpense';
import './App.css';

function App() {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [submitted, setSubmit] = useState(false);
  const [editBudget, setEditBudget] = useState(false);
  const [addExpense, setAddExpense] = useState(false);

  // Show edit budget component when Edit Budget button is clicked
  const showEditBudget = (e) => {
    setEditBudget(true);
  }

  //TODO: Change Editbutton to a input the same design as Budget amount, will have to move budgetamount into its own component

  return (
    <div className="App">
      <Header />
      {editBudget ? <EditBudget setEditBudget={setEditBudget} setBudgetAmount={setBudgetAmount} /> : <Budget budgetAmount={budgetAmount} />}
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmount} setSubmit={setSubmit} />}

      {submitted && (
        <div className='buttonWrapper'>
          <div className='buttonUI' onClick={() => setAddExpense(true)}>Add Expense</div>
          <div className='buttonUI' onClick={showEditBudget}>Edit Budget</div>
        </div>
      )}
      {addExpense && <AddExpense />}
    </div>
  );
}

export default App;
