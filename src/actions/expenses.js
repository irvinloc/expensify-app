import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


export const addExpense = ({
description='', note='',amount=0,createdAt=moment()
} = {})=>({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

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

