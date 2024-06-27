import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense, editExpense, categoryFilter, setCategoryFilter }) => {
  const filteredExpenses = categoryFilter
    ? expenses.filter((expense) => expense.category === categoryFilter)
    : expenses;

  const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <section className="expense-list">
      <h2>Expense List</h2>
      <div className="filter">
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
        </select>
      </div>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <div className="expense-details">
              <span><p className="ae">Description: </p> {expense.description}</span>
              <span><p className="ae">Amount: </p> Rs {expense.amount.toFixed(2)}</span>
              <span><p className="ae">Date: </p> {expense.date}</span>
              <span><p className="ae">Category: </p> {expense.category}</span>
            </div>
            <div className="expense-actions">
              <button onClick={() => editExpense(index)}>Edit</button>
              <button onClick={() => deleteExpense(index)} id="Delete">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-amount">
        Total: Rs {totalAmount.toFixed(2)}
      </div>
    </section>
  );
};

export default ExpenseList;
