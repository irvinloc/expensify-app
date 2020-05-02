import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

 
export const ExpenseList = (props) => (
    
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
            <div className="show-for-desktop">Delete</div>
        </div>
        <div clasName="list-body">
            {props.expenses.length===0 ? (
                <div className="list-item list-item__message">
                <span>No expenses</span>
                </div>
                ):
            (props.expenses.map(x=> <ExpenseListItem  key={x.id} {...x} />))}
        </div>
    </div>
);

const mapStateToProps=(state)=>{
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        expenses_total: selectExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
    };
};
export default connect(mapStateToProps)(ExpenseList);
