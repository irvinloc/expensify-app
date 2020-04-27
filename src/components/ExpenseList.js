import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

 
export const ExpenseList = (props) => (
    
    <div>
        
        {props.expenses.length===0 ? (<p>Please, register some expenses</p>):
        (props.expenses.map(x=> <ExpenseListItem  key={x.id} {...x} />))}
    </div>
);

const mapStateToProps=(state)=>{
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        expenses_total: selectExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
    };
};
export default connect(mapStateToProps)(ExpenseList);
