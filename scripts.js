/* Add your JavaScript to this file */

window.onload = function(){
    var form = document.querySelector("main section div form");
    var message = document.querySelector("section div .message");

    form.onsubmit = function(){
        var email = document.getElementById("email").value
        var checker = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(email == "" || !(checker.test(email))){
            message.innerHTML = "Please enter a valid email address."
        } else {
            message.innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!"
        }
    }
}