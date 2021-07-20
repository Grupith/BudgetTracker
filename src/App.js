import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const tempBudgetAmount = localStorage.getItem('currentBudgetAmount');
    const loadedBudgetAmount = JSON.parse(tempBudgetAmount);

    loadedBudgetAmount && setBudgetAmount(loadedBudgetAmount);
  }, [])

  useEffect(() => {
    const tempBudgetAmount = JSON.stringify(budgetAmount);
    localStorage.setItem('currentBudgetAmount', tempBudgetAmount);
  }, [budgetAmount])

  useEffect(() => {
    const tempItems = localStorage.getItem('Items');
    const loadedItems = JSON.parse(tempItems);

    loadedItems && setItems(loadedItems);
  }, [])

  useEffect(() => {
    const tempItems = JSON.stringify(items);
    localStorage.setItem('Items', tempItems);
  }, [items])

  useEffect(() => {
    const tempSubmitted = JSON.stringify(submitted);
    localStorage.setItem('submitted', tempSubmitted);
    // setSubmit(true);
  }, [submitted])

  useEffect(() => {
    const getSubmitted = localStorage.getItem('submitted');
    const submission = JSON.parse(getSubmitted);
    submission && setSubmit(submission);
    console.log('Get submitted data', submission);
  }, [])



  //TODO: Fix styling on mobile
  //TODO: add loggedIn, setLoggedIn, if logged in is true from localstorage, display data, if false, display AddBudget

  return (
    <div className="App">
      <Header setSubmit={setSubmit} setBudgetAmount={setBudgetAmount} setItems={setItems} />
      {editBudget ? <EditBudget setEditBudget={setEditBudget} setBudgetAmount={setBudgetAmount} setItems={setItems} /> : <Budget budgetAmount={budgetAmount} />}
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmount} setSubmit={setSubmit} />}

      {submitted && (
        <div className='buttonContainer'>
          <div className='buttonWrapper'>
            <div className='buttonUI' onClick={() => setAddExpense(true)}>Add Expense</div>
            <div className='buttonUI' onClick={showEditBudget}>Edit Budget</div>
          </div>
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
