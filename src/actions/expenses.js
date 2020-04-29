import moment from 'moment';
import database from '../firebase/firebase';


export const addExpense = (expense)=>({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description='', 
            note='',
            amount=0,
            createdAt=moment().valueOf()
        } = expenseData;
        const expense = { description, note, amount, createdAt};
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id:ref.key, 
                ...expense
            }));
        });
    };
};

export const editExpense = (id, updates )=>({
        type: "EDIT_EXPENSE",
        expense: {
            id,
            updates
        }
    });
export const startEditExpense = (id, expenseData={}) => {
        return (dispatch) => {
            return database.ref(`expenses/${id}`).update(expenseData).then((snapshot) => {
                dispatch(editExpense(id, expenseData));
            });
        };
    };
export const removeExpense = ( {id}={}) =>({
        type: "REMOVE_EXPENSE",
        id
    });
export const startRemoveExpense = ( {id}={}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then((snapshot) => {
            dispatch(removeExpense({id}));
        });
    };
};
export const setExpenses = (expenses)=> ({
    type: "SET_EXPENSES",
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses= [];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key, 
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};