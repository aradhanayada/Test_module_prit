const score =
parseInt(localStorage.getItem("score")) || 0;

const attempted =
parseInt(localStorage.getItem("attempted")) || 0;

const percentage =
(score/10)*100;

document.getElementById("candidate").innerHTML =
"👤 " + localStorage.getItem("candidateName");

document.getElementById("score").innerHTML =
score + "/10";

document.getElementById("attempted").innerHTML =
attempted;

document.getElementById("percentage").innerHTML =
percentage + "%";

document.getElementById("status").innerHTML =
percentage >= 40
? "✅ PASS"
: "❌ FAIL";