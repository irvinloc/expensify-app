import moment from 'moment';
import { connect } from 'react-redux';
import React from 'react';
import { Link} from 'react-router-dom';

import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
    <div>
    
         <span><Link  to={`/edit/${id}`} >{description} </Link> - {amount/100} -  {moment(createdAt).format("YYYY-MM-DD")} &nbsp;
         <button onClick={(e) => {dispatch(removeExpense({id}));} }>Remove</button> 
         </span>
    </div>
);

export default connect()(ExpenseListItem);