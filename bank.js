/*first page*/

document.getElementById('login-submit').addEventListener("click", function () {
  const emailField=document.getElementById('user-email')
    const userEmail=emailField.value

    const passwordField=document.getElementById('user-password')
    const userPassword=passwordField.value
  if (userEmail==='login@gmail.com' && userPassword==='secret') {
    /*console.log('valid password')*/

    document.getElementById("login-submit").onclick = function () {
      location.href = "banking.html";
    };
  }


})







