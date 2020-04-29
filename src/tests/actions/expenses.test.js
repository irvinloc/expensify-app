import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import  { startAddExpense, addExpense, removeExpense, editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    
    const action = addExpense( expenses[2]);
    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
        
    });
   
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData= {
        description: 'Mouse', 
        amount: 3000,
        note: 'the better', 
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=> {
        const actions =  store.getActions();
        // console.log("***ACTIONS***");
        // console.log(actions);
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }).catch((e)=> console.log('error in test', e));
    
});

test('should add expense with defaults to database and store', (done) =>{
    const store = createMockStore({});
    const expenseDefaults= {
        description:'', 
        note:'',
        amount:0,
        createdAt:0
    }
    store.dispatch(startAddExpense({})).then(()=> {
        const actions =  store.getActions();
        // console.log("***ACTIONS***");
        // console.log(actions);
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    }).catch((e)=> console.log('error in test', e));
})
// test('Should set up add expense action object with default values',()=>{
//     const action = addExpense( {});
//     expect(action).toEqual( {
//         type: 'ADD_EXPENSE',
//         expense: {
//             description:'',
//             note:'',
//             amount:0,
//             createdAt: expect.any(Object),
//             id: expect.any(String)
//         }
//     });

   
// })
