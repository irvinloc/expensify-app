import React from 'react';
import ExpenseList from './ExpenseList'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
import { connect } from 'react-redux';
// import { NavLink}  from 'react-router-dom';
import  getVisibleExpenses  from '../selectors/expenses'
import  getTotalExpenses  from '../selectors/expenses-total'
// import { setGenerating, resetGenerating }  from '../actions/filters'
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';
import makeBins from '../utils/binsForHistogram';


export const ExpenseDashboardPage =(props)=> (
    <div>
  
    {/* <button onClick={(e)=>{ props.dispatch(setGenerating()) } }>GENERATE</button>
    <button onClick={(e)=>{ props.dispatch(resetGenerating()) }}>STOP GENERATE</button> */}
        <div>
            <ExpensesSummary/>
            
            <ExpenseListFilter  expenseCount={getTotalExpenses(getVisibleExpenses(props.expenses, props.filters))} expensesTotal= {props.expenses.length} />
        </div>
        <ExpenseList/>
        <div className="content-container">
        <XYPlot
            width={600}
            height={300}
            yDomain={[0,100]}
            animate= {true}
            >

            <HorizontalGridLines   />
            <LineSeries 
                data={makeBins(getVisibleExpenses(props.expenses, props.filters))}/>
            <XAxis />
            <YAxis />
        </XYPlot>
        </div>
        
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