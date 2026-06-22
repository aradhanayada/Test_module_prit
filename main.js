document
.getElementById("candidateForm")
.addEventListener("submit", function(e){

e.preventDefault();

localStorage.setItem(
"candidateName",
document.getElementById("name").value
);

localStorage.setItem(
"candidateEmail",
document.getElementById("email").value
);

localStorage.setItem(
"candidateMobile",
document.getElementById("mobile").value
);

window.location.href =
"instructions.html";

});