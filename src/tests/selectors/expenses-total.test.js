import selectExpensesTotal  from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 for empty expenses', () =>{
    
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});
test('should correctly add a single expenses', () =>{
    
    const result = selectExpensesTotal([expenses[1]]);
    expect(result).toBe(expenses[1].amount);
});
test('should correctly add several expensess', () =>{
    
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(expenses[0].amount + expenses[1].amount +expenses[2].amount);
});