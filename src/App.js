import React, { useState } from 'react';
import Header from './components/Header';
import AddBudget from './components/AddBudget'
import EditBudget from './components/EditBudget';
import './App.css';

function App() {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [submitted, setSubmit] = useState(false);
  const [editBudget, setEditBudget] = useState(false);

  // Show edit budget component when Edit Budget button is clicked
  const showEditBudget = (e) => {
    setEditBudget(true);
  }

  //TODO: Move editBudget UI into its own component so it doesnt mess with the styling of the original form budget amount
  //TODO: Change Editbutton to a input the same design as Budget amount, will have to move budgetamount into its own component

  return (
    <div className="App">
      <Header budgetAmount={budgetAmount} />
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmount} setSubmit={setSubmit} setEditBudget={setEditBudget} />}
      {submitted && (
        <div className='buttonWrapper'>
          <div className='buttonUI'>Add Expense</div>
          <div className='buttonUI' onClick={showEditBudget}>Edit Budget</div>
        </div>
      )}
      {editBudget && <EditBudget setEditBudget={setEditBudget} setBudgetAmount={setBudgetAmount} />}
    </div>
  );
}

export default App;
