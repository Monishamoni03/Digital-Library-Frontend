import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { registerUser } from '../../action/action';
import ValidateRegister from '../../container/utils/ValidateRegister';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            // error: {
            //     firstNameError: '',
            //     lastNameError: '',
            //     emailError: '',
            //     passwordError: '',
            // },
            submitted: false
        };
         
        // componentDidMount() {
        //     this.props.registerUser();
            
        // }
        
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
        const error = ValidateRegister(user);
        return error

       // console.log("error",error.firstNameError)
    }

    handleSubmit(event) {
        const { user } = this.state
        event.preventDefault();
    
        let isValid = this.validate();
        console.log("valid",isValid.firstNameError)
        if (isValid.firstNameError === '' && isValid.lastNameError === '' && isValid.emailError === '' && isValid.passwordError === '') {
            isValid = true
        }
        else{
            isValid = false
        }
        console.log("is valid or not",isValid)
        if (isValid) {
            //dispatch(registerUser(user));
            this.props.registerUser()
            // navigate('/login');
            this.setState({ redirect: "/login" });
        }
       
    }

    render() {
        const { user } = this.state;
        // const { error } = this.state;
        const error = ValidateRegister(user);
         console.log(error)
        return (
            <div className = "col-md-6 col-md-offset-3">
                <h2>Create Account</h2>
                <form  action = '#' method = 'POST' name = "form" onSubmit = {this.handleSubmit}>
                    <div className = "forms">
                        <label htmlFor = "firstName">First Name<sup>*</sup></label>
                        <input type = "text" className = "form-control" name = "firstName" placeholder = "Enter your first name" value = {user.firstName} onChange = {this.handleChange} />
                        <p>{error.firstNameError}</p>
                        
                    </div>
                    <div className = "forms">
                        <label htmlFor = "lastName">Last Name<sup>*</sup></label>
                        <input type = "text" className = "form-control" name = "lastName" placeholder = "Enter your last name" value = {user.lastName} onChange = {this.handleChange} />
                        <p>{error.lastNameError}</p>
                        
                    </div>
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
                        <Link to = "/login" className = "btn btn-primary" onClick={this.handleSubmit}>Register</Link>

                        {/* <Link to = "/login" className = "btn btn-link">Login</Link> */}
                    </div>
                </form>
            </div>
        );
    }
}

    const mapStateToProps = state => {
        return {
            users: state.data,
            // successmessage: state.data
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            registerUser: (user) => dispatch(registerUser(user))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Register);