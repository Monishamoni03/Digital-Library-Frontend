import * as regex from '../constants/regex';

function ValidateLogin(user) {
    console.log("user is",user)
    console.log("entered validation")

    const error = {
        emailError:'',
        passwordError:''
    }

    const emailRegex = regex.EMAIL_REGEX;
    const passwordRegex = regex.PASSWORD_REGEX;

    if (user.email === "") {
        // console.log("user email err")
        error.emailError = "Please enter your email";
    }
    else if (!emailRegex.test(user.email)) {
        error.emailError = "Invalid email address";
    }

    if (user.password === "") {
        error.passwordError = "Please enter your password";
    }
    else if (!passwordRegex.test(user.password)) {
        error.passwordError = "Minimum 6 characters required";
    }

    if (error.email || error.password) {
        return error;
    }

    return error;
}

export default ValidateLogin;