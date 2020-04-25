import  { addExpense, removeExpense, editExpense} from '../../actions/expenses';
import moment from 'moment';

test('Should set up remove expense action object',()=>{
    const action = removeExpense( { id: '1234'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
})

test('Should set up edit expense action object',()=>{
    const action = editExpense( '1234' , {description:'d1', amount: 123, note: 'n1'});
    expect(action).toEqual({ type: 'EDIT_EXPENSE', expense: {id: '1234', updates: {description:'d1', amount: 123, note: 'n1'}}});
   
})

test('Should set up add expense action object',()=>{
    const expenseData= {description:'d1', amount: 123, note: 'n1', createdAt: moment()};
    const action = addExpense( expenseData);
    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
   
});
test('Should set up add expense action object with default values',()=>{
    const action = addExpense( {});
    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount:0,
            createdAt: expect.any(Object),
            id: expect.any(String)
        }
    });

   
})
