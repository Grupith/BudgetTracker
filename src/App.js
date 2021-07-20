import React, {useState, useEffect, useCallback} from 'react';
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



  //TODO: Fix styling on mobile
  //TODO: add loggedIn, setLoggedIn, if logged in is true from localstorage, display data, if false, display AddBudget

  return (
    <div className="App">
      <Header setSubmit={setSubmittedAndCache} setBudgetAmount={setBudgetAmountAndCache} setItems={setItemsAndCache} />
      {editBudget ? <EditBudget setEditBudget={setEditBudget} setBudgetAmount={setBudgetAmountAndCache} setItems={setItemsAndCache} /> : <Budget budgetAmount={budgetAmount} />}
      {!submitted && <AddBudget setBudgetAmount={setBudgetAmountAndCache} setSubmit={setSubmittedAndCache} />}

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
