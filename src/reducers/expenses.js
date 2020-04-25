const defaultExpensesReducerState=[];
export default (state=defaultExpensesReducerState, action) => {
    switch(action.type) {                
        case "ADD_EXPENSE" :
            return  [...state, action.expense]  
        case "EDIT_EXPENSE" :
            console.log('EDIT_EXPENSE');
            console.log('x.id',action.expense.id);
            console.log(action.expense);
            return state.map((x)=>x.id===action.expense.id? {...x, ...action.expense.updates}: x)
        case "REMOVE_EXPENSE" :
            return  state.filter((x)=>x.id!==action.id)           
        default: 
            return state
    }
};