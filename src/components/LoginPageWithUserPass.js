import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from '../actions/users';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:  '',
            password: '',
            error: undefined,
            
        }
    }
            
    onUsernameChange = (e) => {
        const username= e.target.value;
        this.setState(()=>({ username }));
    }
    onPasswordChange = (e) => {
        const password= e.target.value;
        this.setState(()=>({ password }));
    }
    onSubmit = (e) =>{
        e.preventDefault();
        
        if (!this.state.username || !this.state.password) {
            this.setState(()=> ({error: 'Please, provide username and password'}));
        }
        else {
            this.setState(()=> ({error: undefined}));
            // console.log(e);
            this.props.startLogin(this.state.username, this.state.password)
            .then(()=>{
                console.log('saliendo de then');
                if (this.state.loggedUser.id) {
                    this.props.history.push('/dashboard');
                }
            });
            // this.setState(()=> ({...this.reset_state}));
        }

    }
    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" placeholder="Username" autoFocus 
                    value={this.state.username} onChange={this.onUsernameChange}>
                    </input>
                    <input 
                    type="text" placeholder="password"
                    value={this.state.password} onChange={this.onPasswordChange}></input>
                    

                    <button>LOGIN</button>
                </form>
            </div>
        );
    }
};
const mapDispatchToProps = (dispatch) => ({
    startLogin: (username, password) => dispatch(startLogin(username, password))
});

const mapStateToProps = (state) => ({
    loggedUser: state.user.loggedUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
