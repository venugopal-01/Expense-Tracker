import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = ({ addExpense, currentExpense, setCurrentExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentExpense) {
      setDescription(currentExpense.description);
      setAmount(currentExpense.amount);
      setCategory(currentExpense.category);
    }
  }, [currentExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toLocaleString()
      };
      addExpense(newExpense);
      setDescription('');
      setAmount('');
      setCategory('');
      setCurrentExpense(null);
    }
  };

  return (
    <section className="expense-form-section">
      <h2 id="add-expense"> Add Expense</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
        </select>
        <button type="submit" disabled={!description || !amount || !category}>
          {currentExpense ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </section>
  );
};

export default AddExpenseForm;
