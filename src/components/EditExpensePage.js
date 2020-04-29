import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit=(expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startEditExpense(this.props.expense.id, expense);
        
        this.props.history.push('/');
    };
    onRemoveExpense=() => {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Edit Expense </h1>
                
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}>
                </ExpenseForm>
                <button  onClick={this.onRemoveExpense} > DELETE </button>
                    
            </div>
        );
     }
}

const mapStoreToProps = (state, props) =>{
    return {
        expense: state.expenses.find(x=>x.id===props.match.params.id)
    }
}
const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id,expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id)=> dispatch(startRemoveExpense(id))
});


export default connect(mapStoreToProps, mapDispatchToProps)(EditExpensePage);