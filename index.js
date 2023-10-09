// slide

const signUpButton = document.getElementById("sign-up");
const signInButton = document.getElementById("sign-in");
const container = document.getElementById("container");

signUpButton.addEventListener('click', ()=>{
    container.classList.add("right-panel-active");
})
signInButton.addEventListener('click', ()=>{
    container.classList.remove("right-panel-active");
})


const signInForm = document.querySelector('.form-container.sign-in-container form');

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.querySelector('.sign-in-container input[type="email"]').value;
    const password = document.querySelector('.sign-in-container input[type="password"]').value;

    // username and password
    const validUsername = "admin@gmail.com";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = './voicecon.html';
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
