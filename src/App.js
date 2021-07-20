import React, {useState, useEffect, useCallback} from 'react';
import {
  Header,
  Budget,
  AddBudget,
  EditBudget,
  AddExpense
} from './components';
import './App.css';

function App() {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [submitted, setSubmit] = useState(false);
  const [editBudget, setEditBudget] = useState(false);
  const [addExpense, setAddExpense] = useState(false);

  const [expense, setExpense] = useState('');
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const setBudgetAmountAndCache = useCallback((budgetAmount) => {
    const tempBudgetAmount = JSON.stringify(budgetAmount);
    localStorage.setItem('currentBudgetAmount', tempBudgetAmount);
    setBudgetAmount(budgetAmount);
  }, [])

  const setItemsAndCache = useCallback((items) => {
    const tempItems = JSON.stringify(items);
    localStorage.setItem('Items', tempItems);
    setItems(items);
  }, [])

  useEffect(() => {
    const tempBudgetAmount = localStorage.getItem('currentBudgetAmount');
    const loadedBudgetAmount = JSON.parse(tempBudgetAmount);

    loadedBudgetAmount && setBudgetAmountAndCache(loadedBudgetAmount);
  }, [setBudgetAmountAndCache])

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


  //TODO: Update localStorage when you edit your budgetAmount
  //TODO: Make AddBudget Reset budget the same styling as other buttons (.buttionUI)
  //TODO: Fix mobile scrolling issue with background if list goes off page

  return (
    <div className="App">
      <Header setSubmit={setSubmit} setBudgetAmount={setBudgetAmount} setItems={setItems} />
      {editBudget ? <EditBudget setEditBudget={setEditBudget} setBudgetAmount={setBudgetAmountAndCache} setItems={setItemsAndCache} /> : <Budget budgetAmount={budgetAmount} />}
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmountAndCache} setSubmit={setSubmittedAndCache} />}

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
      </div>)}

    </div>
  );
}

export default App;
