import expensesReducer from '../../reducers/expenses';


test('should set default state', ()=>{
    const state = expensesReducer(undefined, { type: '@@INITIAL'})
    expect(state).toEqual([]);
})
