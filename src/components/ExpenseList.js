import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
 
export const ExpenseList = (props) => (
    <div>cw
        {props.expenses.length===0 ? (<p>Please, register some expenses</p>):
        (props.expenses.map(x=> <ExpenseListItem  key={x.id} {...x} />))}
    </div>
);

const mapStateToProps=(state)=>{
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);
