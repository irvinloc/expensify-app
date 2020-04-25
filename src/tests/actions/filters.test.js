import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, resetFilters} from '../../actions/filters';
import moment from 'moment';
test('should generate set start date action object', () =>{
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        filter: {
        startDate: moment(0)
        }
    })
})

test('should generate set end date action object', () =>{
    const action= setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        filter: {
        endDate: moment(0)
        }
    })
})
test('should generate set set text action object', () =>{
    const action= setTextFilter("seed");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: {
        text: "seed"
        }
    })
})
test('should generate set sort by date action object', () =>{
    const action= sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        filter: {
        sortBy: "date"
        }
    })
})
test('should generate set sort by amount action object', () =>{
    const action= sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        filter: {
        sortBy: "amount"
        }
    })
})

test('should generate set sort by amount action object', () =>{
    const initial_values={
        type:'RESET_FILTERS',
        filter: {
        text:'',
        sortBy: 'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
        autogenerating: false
        }
    }
    const action= resetFilters();
    expect(action).toEqual(initial_values);
})


