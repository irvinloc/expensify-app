import moment from 'moment';
import { connect } from 'react-redux';
import React from 'react';
import { Link} from 'react-router-dom';
import numeral from 'numeral';

import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
    <div>
    
         <span><Link  to={`/edit/${id}`} >
         {description} 
         </Link> 
         - {numeral(amount/100).format('$0,0.00').replace('$', '€')} -  
         {moment(createdAt).format("MMMM Do, YYYY")} &nbsp;
         <button onClick={(e) => {dispatch(removeExpense({id}));} }>Remove</button> 
         </span>
    </div>
);

export default connect()(ExpenseListItem);