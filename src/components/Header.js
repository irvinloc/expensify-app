import { NavLink}  from 'react-router-dom';
import React from 'react';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div className="container">
        <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create</NavLink>
        
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        </div>
    </header>
);
export default Header;