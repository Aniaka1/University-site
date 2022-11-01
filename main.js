let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
    searchbar.classList.remove("active");
}

let searchbar = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchbar.classList.toggle("active");
    navbar.classList.remove("active");
}

window.onscroll = () =>{
    navbar.classList.remove("active");
    searchbar.classList.remove("active");
}

function showMessage(input,message,type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}

function showError(input,message) {
    return showMessage(input,message,false);
}

function showSuccess(input) {
    return showMessage(input,"",true);
}

function hasValue(input,message) {
    if(input.value.trim() === "") {
        return showError(input,message);
    }
    return showSuccess(input);
}

function showMessage(input,message,type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}


function validateEmail(input,requiredMsg,invalidMsg) {

    if(!hasValue(input,requiredMsg)) {
        return false;
    }

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if(!emailRegex.test(email)) {
        return showError(input,invalidMsg);
    }
    return true;
}

const form = document.querySelector("#signup");

const Name_Required = "Please enter your name";
const Email_Required = "Please enter your email";
const Email_Invalid = "Please enter a correct email address format";
const Phone_Required = "Please enter your phone number";

form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    
    let nameValid = hasValue(form.elements["name"],Name_Required);
    let emailValid = validateEmail(form.elements["email"],Email_Required,Email_Invalid);
    let phoneValid = hasValue(form.elements["phone"],Phone_Required);
    
    if(nameValid && emailValid && phoneValid) {
        alert("Demo only,no form was posted!!!");
    }
});