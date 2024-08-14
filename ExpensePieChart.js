import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const ExpensePieChart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const config = {
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                    },
                };
                const res = await axios.get('http://localhost:5000/api/expenses', config);
                const expenses = res.data;

                const categories = [...new Set(expenses.map((exp) => exp.category))];
                const categoryAmounts = categories.map((cat) =>
                    expenses
                        .filter((exp) => exp.category === cat)
                        .reduce((acc, exp) => acc + exp.amount, 0)
                );

                setChartData({
                    labels: categories,
                    datasets: [
                        {
                            data: categoryAmounts,
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                        },
                    ],
                });
            } catch (err) {
                console.error(err.response.data);
            }
        };
        fetchChartData();
    }, []);

    return (
        <div>
            <h1>Expense Distribution</h1>
            <Pie data={chartData} />
        </div>
    );
};

export default ExpensePieChart;
