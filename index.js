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



// Login ID
    
   const signInForm = document.querySelector(".sign-in-container form");

   
   signInForm.addEventListener('submit', (event) => {
        event.preventDefault(); 


        const username = document.querySelector('.sign-in-container input[type="email"]').value;
        const password = document.querySelector('.sign-in-container input[type="password"]').value;

        //  username and password

        const validUsername = "admin@gmail.com";
        const validPassword = "admin";

        if (username === validUsername && password === validPassword) {
            
            alert("Login successful!");
        } else {
            
            alert("Invalid username or password. Please try again.");
        }
    });


    // sign in page


    document.addEventListener('DOMContentLoaded', function () {
        
        var signInForm = document.querySelector('.form-container.sign-in-container form');

                signInForm.addEventListener('submit', function (event) {
            
            event.preventDefault();

            window.location.href = './voicecon.html';
        });
    });



