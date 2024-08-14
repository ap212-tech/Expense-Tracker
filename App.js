import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import AddExpense from './components/ExpenseManager/AddExpense';
import ViewExpenses from './components/ExpenseManager/ViewExpenses';
import ExpensePieChart from './components/Visualization/ExpensePieChart';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/add-expense" component={AddExpense} />
                    <Route exact path="/view-expenses" component={ViewExpenses} />
                    <Route exact path="/visualization" component={ExpensePieChart} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
