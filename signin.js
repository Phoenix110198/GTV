import {Utilities} from "utilities.js";
//login
const signin=(e)=>{
    // fetch form data
    const signinFormData={
        email : e.target.user.value,
        password : e.target.pass.value
    }

    //check if user exists in backend
    Utilities.getUser(signinFormData)
    .then(user=> {
        if(user){
            return user;
        }else{
            throw new Error('Please SignUp before you SignIn');
        }
    })
    .then(user=> Utilities.authenticateUser(signinFormData,user))// authenticate the user
    .then(user=>{
        //set the local storage
        localStorage.setItem('userName',user.id);
        //navigate the user to the home page
        window.location='index.html';
    })
    .catch(err=>{
        alert(err.message);
    });
}

//called after the login.html completes the load event
window.onload=()=>{
    //get the login form
    const signinForm = document.getElementById('signinform');
    // bind the onSubmit event to login function
    signinForm.onsubmit=(e)=>{
        e.preventDefault();
        signin(e);
    };
}

