

    


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

store.dispatch(resetFilter());
// console.log('***apply gasto ***');
// store.dispatch(setTextFilter({
//     text:'2'
// }));


// console.log('***apply fechas ***');
// store.dispatch(setStartDate(45));
// store.dispatch(setEndDate(600));


// store.dispatch(removeExpense({id:exp1.expense.id}));
// store.dispatch(editExpense(exp2.expense.id, {note: exp2.expense.note + ' CAMBIADA '}));
const unsubscribe= store.subscribe(()=>{
    const state=store.getState();
    console.log('==============================');
    console.log(state.expenses);
    
    console.log(getVisibleExpenses(state.expenses,state.filters) )
});
console.log("sortbydate")
store.dispatch(sortByDate());
console.log("sortbyAmount")
store.dispatch(sortByAmount());
store.dispatch(setStartDate(5));
store.dispatch(setEndDate());
console.log(store.getState());
