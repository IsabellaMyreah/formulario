var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus', () =>{
    email.style.borderColor = "#FFFFFF";
});

email.addEventListener('blur', () => {
    email.style.borderColor = "#000000";
}); 

password.addEventListener('focus', () =>{
    password.style.borderColor = "#FFFFFF ";
});

password.addEventListener('blur', () => {
    password.style.borderColor = "#000000 ";
}); 