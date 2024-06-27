import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentExpense, setCurrentExpense] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');

  // Retrieve expenses from localStorage when the component mounts
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  const editExpense = (index) => {
    const expense = expenses[index];
    setCurrentExpense({ ...expense, index });
    deleteExpense(index);
  };

  return (
    <div className="app">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="add-expense">
        <AddExpenseForm addExpense={addExpense} currentExpense={currentExpense} setCurrentExpense={setCurrentExpense} />
      </div>
      <div id="expenses">
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </div>
    </div>
  );
};

export default App;
