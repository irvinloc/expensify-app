import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', ()=>{
    const state = expensesReducer(undefined, { type: '@@INITIAL'})
    expect(state).toEqual([]);
})

test('should set expenses', ()=>{
    const action = {
        type: 'SET_EXPENSES',
        expenses
    }
    const state= expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})
