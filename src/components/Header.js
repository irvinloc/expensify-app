import { NavLink}  from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <div className="container">
        <NavLink activeClassName="is-active" to="/dashboard" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create</NavLink>
        
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () =>  {
            dispatch(startLogout())
        }
    }
}
export default connect(undefined, mapDispatchToProps)(Header);