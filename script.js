const signin = document.querySelector("#signin");
const signup = document.querySelector("#signup");
const signinApp = document.querySelector(".signin");
const signupApp = document.querySelector(".signup");
const signinPg = document.querySelector(".signinPg");
const signupPg = document.querySelector(".signupPg");
const theredbackground = document.querySelector(".theredbackground");

signin.addEventListener("click", clicked1);
function clicked1() {
  if (!signinApp.classList.value.includes("signinAppMoves")) {
    signinApp.classList += " signinAppMoves";
  }
  if (!signupApp.classList.value.includes("signupAppMoves")) {
    signupApp.classList += " signupAppMoves";
  }
  if (!signinPg.classList.value.includes("signinPgMoves")) {
    signinPg.classList += " signinPgMoves";
  }
  if (!signupPg.classList.value.includes("signupPgMoves")) {
    signupPg.classList += " signupPgMoves";
  }
  if (!theredbackground.classList.value.includes("theredbackgroundMoves")) {
    theredbackground.classList += " theredbackgroundMoves";
  }
}

signup.addEventListener("click", clicked2);
function clicked2() {
  signinApp.classList.remove("signinAppMoves");
  signupApp.classList.remove("signupAppMoves");
  signinPg.classList.remove("signinPgMoves");
  signupPg.classList.remove("signupPgMoves");
  theredbackground.classList.remove("theredbackgroundMoves");
}
