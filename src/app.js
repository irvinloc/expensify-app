import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter  from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {sortByDate, sortByAmount, setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase';


import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';

const store = configureStore();

console.log(store.getState());

const exp1 = store.dispatch(addExpense({
    description:'GASTO1',
    amount: 15,
    
}));
const exp2 = store.dispatch(addExpense({
    description:'GASTO 2',
    note: 'NOTA GASTO 2',
    amount: 150,
    createdAt:-1
}));
const exp3 = store.dispatch(addExpense({
    description:'EXPENSE 3',
    note: 'NOTA EXPENSE 3',
    amount: 3,
    createdAt:150
}));
let indexCreator=4;
const exp_generator = setInterval(()=>{
        
        if (store.getState().filters.autogenerating) {
        const added= Math.random()*100 -50;
        const mimoment=+moment().add(added,'days');
        console.log("MOMENT", mimoment);
        store.dispatch(addExpense({
        description:'EXPENSE ' + indexCreator,
        note: 'NOTA EXPENSE ' + indexCreator,
        amount: Math.floor(Math.random()*1000),
        createdAt:mimoment
        
    }));
    indexCreator++;
    }   
}, 270);

// const unsubscribe= store.subscribe(()=>{
//     const state=store.getState();
//     console.log('==============================');
//     console.log(state.expenses);
    
//     console.log(getVisibleExpenses(state.expenses,state.filters) )
// });
console.log("sortbydate")
store.dispatch(sortByDate());
console.log("sortbyAmount")
store.dispatch(sortByAmount());
// const state=store.getState();
// console.log(state);
// console.log(getVisibleExpenses(state.expenses,state.filters) )
console.log('***apply filter ***');
// store.dispatch(setTextFilter("3"));
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);
ReactDOM.render(jsx, document.getElementById('app'));
