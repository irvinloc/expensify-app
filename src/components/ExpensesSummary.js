import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

 
export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount ===1 ? 'expense': 'expenses';
    return (
    <div>
        <h2>Viewing {expenseCount} {expenseWord} 
        totalling { numeral(expensesTotal/100).format('$0,0.00').replace('$', '€') }</h2>
    </div>

    );
}
const mapStateToprops = (state) =>
{
    const visibleExpenses=selectExpenses(state.expenses, state.filters);
    return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToprops)(ExpensesSummary);