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

  const [expense, setExpense] = useState('');
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const showEditBudget = (e) => {
    setEditBudget(true);
  }

  return (
    <div className="App">
      <Header />
      {editBudget ? <EditBudget setEditBudget={setEditBudget} setBudgetAmount={setBudgetAmount} setItems={setItems} /> : <Budget budgetAmount={budgetAmount} />}
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmount} setSubmit={setSubmit} />}

      {submitted && (
        <div className='buttonWrapper'>
          <div className='buttonUI' onClick={() => setAddExpense(true)}>Add Expense</div>
          <div className='buttonUI' onClick={showEditBudget}>Edit Budget</div>
        </div>
      )}
      {addExpense && <AddExpense
        setAddExpense={setAddExpense}
        expense={expense}
        setExpense={setExpense}
        price={price}
        setPrice={setPrice}
        items={items}
        setItems={setItems}
        budgetAmount={budgetAmount}
        setBudgetAmount={setBudgetAmount} />}

      {/* Displays list of expenses and prices */}
      {items.map((item) => <div key={item.id} className='itemsContainer'>
        <div className='itemWrapper'>
          <p>{item.expense}</p>
          <p>${item.price}</p>
        </div>
      </div>)}

    </div>
  );
}

export default App;
