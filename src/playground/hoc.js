import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
<div>
    <h1> INFO   </h1>
    <p> the info in:  {props.info} </p>
</div>
);

const WrapperSecurity = (WrappedComponent) =>  {
    return  (props) => (
    <div>
        {props.isAdmin && <h3>Please, dont leak this private info</h3>}
        <WrappedComponent {...props}/>
    </div>
    );
};
const AdminInfo = WrapperSecurity(Info);

const requireAuthentocation = (WrappedComponent) =>  {
    return  (props) => (
    <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <h3>Please, login first</h3>}
    </div>
    );
};
const AuthInfo = requireAuthentocation(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} isAdmin={true} info="detail"/>,
 document.getElementById("app") );