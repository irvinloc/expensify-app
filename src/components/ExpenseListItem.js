import moment from 'moment';
import { connect } from 'react-redux';
import React from 'react';
import { Link} from 'react-router-dom';
import numeral from 'numeral';

import { startRemoveExpense } from '../actions/expenses';

export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
    <Link  className="list-item" to={`/edit/${id}`} >
        <div>
            <h3 className="list-item__title">{description} </h3>
            <span className="list-item__subtitle">{moment(createdAt).format("MMMM Do, YYYY")} &nbsp; </span>
        </div>
        
        <h3 className="list-item__data">  {numeral(amount/100).format('$0,0.00').replace('$', '€')} </h3>
        <button onClick={(e) => {
            dispatch(startRemoveExpense({id}));
            e.preventDefault();
            } }>Remove</button> 
    </Link> 
);

export default connect()(ExpenseListItem);