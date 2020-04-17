const signUpButton = document.querySelector('.register-button');
const signInButton = document.querySelector('.signin-button');
const form = document.querySelector('.main-container');


signUpButton.addEventListener('click' , function(e){
    form.classList.add('switch-over')
});

signInButton.addEventListener('click' , function(e){
    form.classList.remove('switch-over')
});




