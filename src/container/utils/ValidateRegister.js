import * as regex from '../constants/regex';

function ValidateRegister(user) {
    console.log("user is",user)
    console.log("entered validation")

    const error = {
        firstNameError:'',
        lastNameError:'',
        emailError:'',
        passwordError:''
    }

    const nameRegex = regex.NAME_REGEX;
    const emailRegex = regex.EMAIL_REGEX;
    const passwordRegex = regex.PASSWORD_REGEX;

    if (user.firstName === "") {
        error.firstNameError = "Enter your name";
    }
    else if (!nameRegex.test(user.firstName)) {
        error.firstNameError = "Invalid name";
    }

    if (user.lastName === "") {
        error.lastNameError = "Enter your name";
    }
    else if (!nameRegex.test(user.lastName)) {
        error.lastNameError = "Invalid name";
    }

    if (user.email === "") {
        console.log("user email err")
        error.emailError = "Enter your email";
    }
    else if (!emailRegex.test(user.email)) {
        error.emailError = "Invalid email address";
    }

    if (user.password === "") {
        error.passwordError = "Enter your password";
    }
    else if (!passwordRegex.test(user.password)) {
        error.passwordError = "Minimum 6 characters required";
    }

    // if (error.firstName === '' && error.lastName === '' && error.email === '' && error.password === '') {
    //     return true;
    // }
    return error;
}

export default ValidateRegister;