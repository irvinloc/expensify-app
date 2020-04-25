import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DateRangePicker} from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, resetFilters } from '../actions/filters';

// import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange=({startDate, endDate})=> {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange= (calendarFocused) => { this.setState(()=>({ calendarFocused }));}
        
 
    onResetDates = ()=>{
        this.props.setStartDate(moment().add(-50, 'years'));
        this.props.setEndDate(moment().add(50, 'years'));
    }
    onResetAllFilters= ()=> {
        this.props.resetFilters();
    }
    onTextChange= (e) => this.props.setTextFilter(e.target.value);
    onSelectChange= (e)=> e.target.value==="date"?this.props.sortByDate():this.props.sortByAmount();
    
    onTextChanged=(e)=>{this.props.dispatch(setTextFilter(e.target.value));}
    render()  {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    onChange={this.onSelectChange} 
                    value={this.props.filters.sortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.starDate} 
                endDate={this.props.filters.endDate} 
                startDateId="your_unique_start_date_id"
                endDateId="your_unique_end_date_id"
                onDatesChange={this.onDatesChange} 
                focusedInput={this.state.calendarFocused} 
                onFocusChange={this.onFocusChange} 
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                />
                <button onClick={this.onResetDates}>Reset Dates</button>
                <button onClick={this.onResetAllFilters}>Reset All Filters</button>
            </div>
        );
    }
};


const mapStateToProps=(state)=>({
    filters: state.filters
});
const mapDispatchToProps = (dispatch) => ({
    // DatesChange: ({startDate, endDate}) => {
    //     if (startDate) {dispatch(setStartDate(startDate));}
    //     if (endDate) {dispatch(setEndDate(endDate));}
    // },
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    resetFilters: ()=> dispatch(resetFilters())
    
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
