const loginForm = document.querySelector("#loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

if(email && password){
window.location.href = "verify.html";
}

});

}

function verifyCode(){

const code = document.querySelector("#code").value;

if(code){
window.location.href = "dashboard.html";
}

}