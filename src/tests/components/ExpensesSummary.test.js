import React from 'react';

import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses'; 


test('should render component correctly without expenses', () => {
    
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot(); 
});


test('should render component correctly with one expense', () => {
    const expensesTotal=[expenses[1]].map(x=>x.amount).reduce((a,b)=>a+b);
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={expensesTotal}/>);
    expect(wrapper).toMatchSnapshot(); 
});


test('should render component correctly', () => {
    const expensesTotal=expenses.map(x=>x.amount).reduce((a,b)=>a+b);
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={expensesTotal}/>);
    expect(wrapper).toMatchSnapshot(); 
});

