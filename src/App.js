import React from 'react';
import Header from './components/Header';
import AddBudget from './components/AddBudget'
import './App.css';

function App() {
  // const [budgetAmount, setBudgetAmount] = useState(0);

  return (
    <div className="App">
      <Header />
      <AddBudget />
    </div>
  );
}

export default App;
