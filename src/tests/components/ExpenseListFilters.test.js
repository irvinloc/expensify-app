import React from 'react'
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';

import moment from 'moment';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate,resetFilters, filters,wrapper;
beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    resetFilters = jest.fn();
    filters= {
        text:'',
        sortBy: 'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
        autogenerating: false
    }
    
    wrapper = shallow(<ExpenseListFilter setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount}
    setStartDate={setStartDate} setEndDate={setEndDate} resetFilters={resetFilters} filters={filters}
     />);
})


test('should render ExpenseListFilter correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
  });

test('should render ExpenseListFilter with filled filters correctly', ()=> {
    wrapper.setProps({
        filters: {
            text:'gas',
            sortBy: 'amount',
            startDate:moment(0).add(-100, 'days'),
            endDate:moment(0).add(100, 'days'),
            autogenerating: true
        }
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle setTextFilter event', ()=> {
    const text='gas';
    wrapper.find('input').prop('onChange')({target:{value:text}});
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
                     
});

test('should handle sortByDate event', ()=> {
    const value='date';
    wrapper.find('select').prop('onChange')({target:{value}});
    expect(sortByDate).toHaveBeenCalled();
                     
});

test('should handle sortByAmount event', ()=> {
    const value='amount';
    wrapper.find('select').prop('onChange')({target:{value}});
    expect(sortByAmount).toHaveBeenCalled();
                     
});

test('should handle onDatesChange event', ()=> {
    const startDate=moment(-1000);
    const endDate=moment(1000);
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
                     
});

test('should handle resetDates event', ()=> {
    const initime=moment().add(-50, 'years')
    const endtime=moment().add(50, 'years')
    wrapper.find('button').at(0).prop('onClick')();
    expect(setStartDate).toHaveBeenLastCalledWith(initime);
    expect(setEndDate).toHaveBeenLastCalledWith(endtime);               
});

test('should handle resetFilters event', ()=> {

    wrapper.find('button').at(1).prop('onClick')();
    expect(resetFilters).toHaveBeenCalled();
    
});

test('should handle dete focus changes event', ()=> {
    const calendarFocused='endDate';
    const calendarFocused2='startDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused2)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused2);
});
