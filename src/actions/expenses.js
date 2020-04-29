import { v4 as uuidv4 } from 'uuid';
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
export const removeExpense = ( {id}={}) =>({
        type: "REMOVE_EXPENSE",
        id
    });

