import selectExpenses  from '../../selectors/expenses';
import moment from 'moment';
const expenses = [{
        id:1, 
        description:'Gun',
        note:'',
        amount: 195, 
        createdAt: 0
    },
    {
        id:2, 
        description:'e1',
        note:'',
        amount: 109500, 
        createdAt: -1000
    },
    {
        id:3, 
        description:'Credit Card',
        note:'',
        amount: 4500, 
        createdAt: 1000
        },
]
test('should filter by text value', () =>{
    const filters = {
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
})
