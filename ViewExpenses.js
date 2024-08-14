import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const config = {
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                    },
                };
                const res = await axios.get('http://localhost:5000/api/expenses', config);
                setExpenses(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };
        fetchExpenses();
    }, []);

    return (
        <div>
            <h1>Expenses</h1>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Comments</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense._id}>
                            <td>{expense.category}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.comments}</td>
                            <td>{new Date(expense.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewExpenses;
