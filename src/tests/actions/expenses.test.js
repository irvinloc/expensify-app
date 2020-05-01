import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import  { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, 
    startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid='thisismytestuid';

beforeEach((done)=> {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt})=>{
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done());
})

test('Should set up remove expense action object',()=>{
    const action = removeExpense( { id: '1234'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
})
test('should remove expense from firebase', (done) => {
    const store = createMockStore({ auth: { uid }});
    const id=expenses[0].id 
    store.dispatch(startRemoveExpense({id})).then(()=> {
        const actions =  store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id  
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
    
});

test('Should set up edit expense action object',()=>{
    const action = editExpense( '1234' , {description:'d1', amount: 123, note: 'n1'});
    expect(action).toEqual({ type: 'EDIT_EXPENSE', expense: {id: '1234', updates: {description:'d1', amount: 123, note: 'n1'}}});
   
})
test('should edit expense to database and store', (done) => {
    const store = createMockStore({auth: {uid}});
    const expenseData= {
        description: 'Mouses', 
        amount: 30400,
        note: 'the betters', 
        createdAt: 10000 
    }
    const id=expenses[0].id 
    store.dispatch(startEditExpense(id, expenseData)).then(()=> {
        const actions =  store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            expense: {
                id,
                updates: expenseData
                
            }
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
    
});


test('Should set up add expense action object',()=>{
    
    const action = addExpense( expenses[2]);
    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
        
    });
   
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({auth: {uid}});
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }).catch((e)=> console.log('error in test', e));
    
});

test('should add expense with defaults to database and store', (done) =>{
    const store = createMockStore({auth:{uid}});
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    }).catch((e)=> console.log('error in test', e));
})

test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done)=>{
    const store = createMockStore({auth:{uid}});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
})

