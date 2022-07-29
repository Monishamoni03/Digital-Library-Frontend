import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ValidateLogin from '../../container/utils/ValidateLogin';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           user: {
                email: '',
                password: ''
            },
            error: {
                emailError: '',
                passwordError: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user:{
            ...user,
            [name]: value
            }
        });
    }
    
    validate() {
        console.log("Validating");

        const { user } = this.state;
        const error = ValidateLogin(user);

        //console.log("error",error.firstNameError)
    }

    handleSubmit(event) {
        event.preventDefault();
    
        const isValid = this.validate();
        if (isValid) {
            
        }
       
    }

    render() {
        const { user } = this.state;
        const error = ValidateLogin(user);
        // console.log(error)
        return (
            <div className = "col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name = "form" onSubmit = {this.handleSubmit}>
                    <div className = "forms">
                        <label htmlFor = "email">Email<sup>*</sup></label>
                        <input type = "text" className = "form-control" name = "email" placeholder = "Enter your email id" value = {user.email} onChange = {this.handleChange} />
                        <p>{error.emailError}</p>
                        
                    </div>
                    <div className = "forms">
                        <label htmlFor = "password">Password</label>
                        <input type = "password" className = "form-control" name = "password" placeholder = "Enter your password" value = {user.password} onChange = {this.handleChange} />
                        <p>{error.passwordError}</p>
                        
                    </div>
                    <div className = "form-group">
                        <button className = "btn btn-primary">Login</button>

                        <Link to = "/welcome" className = "btn btn-link">Welcome</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;