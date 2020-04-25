import React from 'react';
import ExpenseList from './ExpenseList'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
import { connect } from 'react-redux';
import  getVisibleExpenses  from '../selectors/expenses'
import { setGenerating, resetGenerating }  from '../actions/filters'
import ExpenseListFilter from './ExpenseListFilter';
import makeBins from '../utils/binsForHistogram';


export const ExpenseDashboardPage =(props)=> (
    <div>
  
    <button onClick={(e)=>{ props.dispatch(setGenerating()) } }>GENERATE</button>
    <button onClick={(e)=>{ props.dispatch(resetGenerating()) }}>STOP GENERATE</button>
    <div>
        <ExpenseListFilter />
    </div>
    <XYPlot
        width={600}
        height={300}
        yDomain={[0,100]}
        animate= {true}
        >
        <HorizontalGridLines />
        <LineSeries 
            data={makeBins(getVisibleExpenses(props.expenses, props.filters))}/>
        <XAxis />
        <YAxis />
    </XYPlot>
    <ExpenseList/>
    </div> 
);


const mapStateToProps=(state) =>{
    return {
        expenses:state.expenses,
        filters:state.filters
    }
}
export default connect(mapStateToProps)(ExpenseDashboardPage);

//export default ExpenseDashboardPage;