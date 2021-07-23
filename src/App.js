import React, {useState, useEffect, useCallback} from 'react';
import {
  Header,
  Budget,
  AddBudget,
  EditBudget,
  AddExpense,
  Name,
  Reset,
  TodaysDate
} from './components';
import './App.css';
import useMousetrap from 'react-hook-mousetrap';

function App() {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [submitted, setSubmit] = useState(false);
  const [editBudget, setEditBudget] = useState(false);
  const [addExpense, setAddExpense] = useState(false);
  const [name, setName] = useState('');

  const [expense, setExpense] = useState('');
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);


  const setBudgetAmountAndCache = useCallback((budgetAmount) => {
    const tempBudgetAmount = JSON.stringify(budgetAmount);
    localStorage.setItem('currentBudgetAmount', tempBudgetAmount);
    setBudgetAmount(budgetAmount);
  }, [])

  useEffect(() => {
    const tempBudgetAmount = localStorage.getItem('currentBudgetAmount');
    const loadedBudgetAmount = JSON.parse(tempBudgetAmount);
    
    loadedBudgetAmount && setBudgetAmountAndCache(loadedBudgetAmount);
  }, [setBudgetAmountAndCache])

  const setItemsAndCache = useCallback((items) => {
    const tempItems = JSON.stringify(items);
    localStorage.setItem('Items', tempItems);
    setItems(items);
  }, [])
  
  useEffect(() => {
    const tempItems = localStorage.getItem('Items');
    const loadedItems = JSON.parse(tempItems);

    loadedItems && setItemsAndCache(loadedItems);
  }, [setItemsAndCache])

  const setSubmittedAndCache = useCallback((val) => {
    const tempSubmitted = JSON.stringify(val);
    localStorage.setItem('submitted', tempSubmitted);
    setSubmit(val);
  }, []);

  useEffect(() => {
    const getSubmitted = localStorage.getItem('submitted');
    const submission = JSON.parse(getSubmitted);
    console.log({submission})
    submission && setSubmittedAndCache(submission);
  }, [setSubmittedAndCache])

  const setNameAndCache = useCallback((name) => {
    const tempName = JSON.stringify(name);
    localStorage.setItem('name', tempName);
    setName(name);
  }, [])

  useEffect(() => {
    const getName = localStorage.getItem('name');
    const tempName = JSON.parse(getName);
    tempName && setName(tempName);
  }, [setNameAndCache])

  useMousetrap('enter', () => {
    setAddExpense(true);
  });


  //TODO: Fix mobile scrolling issue when tons of items are loaded and safari mobile doesnt allow scrolling on first page load unless buttons are pressed
  //TODO: Save AddExpense date to localStroage
  //TODO:(git) Border around items and date of item are not commited yet until i figure out localStorage

  return (
    <div className="App">
      <Reset setSubmit={setSubmit} setBudgetAmount={setBudgetAmount} setItems={setItems}/>

      {submitted && <Name name={name}/>}
      {submitted && <TodaysDate />}

      {!submitted && <Header setSubmit={setSubmit} setBudgetAmount={setBudgetAmount} setItems={setItems} />}
      
      {editBudget ? <EditBudget setEditBudget={setEditBudget} setBudgetAmount={setBudgetAmountAndCache} setItems={setItemsAndCache} /> : <Budget budgetAmount={budgetAmount} />}
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmountAndCache} setSubmit={setSubmittedAndCache} setName={setNameAndCache} />}


      {submitted && (
        <div className='buttonContainer'>
          <div className='buttonWrapper'>
            <div className='buttonUI' onClick={() => setAddExpense(true)}>Add Expense</div>
            <div className='buttonUI' onClick={() => setEditBudget(true)}>Edit Budget</div>
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
        setItems={setItemsAndCache}
        budgetAmount={budgetAmount}
        setBudgetAmount={setBudgetAmountAndCache} />}

      {/* Displays list of expenses and prices */}
      {items.map((item) => <div key={item.id} className='itemsContainer'>
        <div className='itemWrapper'>
          <p>{item.expense}</p>
          <p>${item.price}</p>
        </div>
        <span>{item.timeItemCreated}</span>
      </div>)}

    </div>
  );
}

export default App;
