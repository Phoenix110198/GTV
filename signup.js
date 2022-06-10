import {User} from "user.js";
import {Utilities} from "utilities.js";

//register
const signup = (e) => {
    try {
        // fetch form data
        const signupFormData = {
            email: e.target.email.value,
            password: e.target.password.value,
            id: e.target.name.value,
            phone: e.target.code.value + '-' + e.target.phone.value
        }
        console.log(signupFormData);
        //validate the new user data
        Utilities.validateNewUser(signupFormData)
        // create the user from validated data
        const newUser = new User(signupFormData.id,
                                 signupFormData.email,
                                 signupFormData.password,
                                 signupFormData.gender,
                                 signupFormData.phone
                                );
        // add the validated user to the DB
        Utilities.addUser(newUser);
    } catch (error) {
        alert(error.message);
    }
}

//called after the login.html completes the load event
window.onload = () => {
    //get the login form
    const signinForm = document.getElementById('signupform');
    // bind the onSubmit event to login function
    signinForm.onsubmit = (e) => {
        e.preventDefault();
        signup(e);
    };
}



