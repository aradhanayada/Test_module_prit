let currentQuestion = 0;

let answers =
JSON.parse(localStorage.getItem("answers")) || [];

let reviewQuestions = [];

let totalTime = 600;

document.getElementById("candidateName")
.innerHTML =
"Candidate : " +
localStorage.getItem("candidateName");

loadQuestion();
generatePalette();

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("questionCount")
.innerHTML =
`Question ${currentQuestion+1} of ${questions.length}`;

document.getElementById("questionText")
.innerHTML =
q.question;

let optionsContainer =
document.getElementById("optionsContainer");

optionsContainer.innerHTML="";

q.options.forEach((option,index)=>{

let div =
document.createElement("div");

div.classList.add("option");

if(answers[currentQuestion]===index){
div.classList.add("selected");
}

div.innerHTML=option;

div.onclick=()=>{

answers[currentQuestion]=index;

localStorage.setItem(
"answers",
JSON.stringify(answers)
);

loadQuestion();
updatePalette();

};

optionsContainer.appendChild(div);

});

updatePalette();

}

function generatePalette(){

let palette =
document.getElementById("palette");

palette.innerHTML="";

questions.forEach((q,index)=>{

let btn =
document.createElement("button");

btn.innerHTML=index+1;

btn.onclick=()=>{

currentQuestion=index;

loadQuestion();

};

palette.appendChild(btn);

});

updatePalette();

}

function updatePalette(){

let buttons =
document.querySelectorAll(".palette button");

buttons.forEach((btn,index)=>{

btn.className="";

if(index===currentQuestion){

btn.classList.add("current");

}
else if(reviewQuestions.includes(index)){

btn.classList.add("review");

}
else if(answers[index]!==undefined){

btn.classList.add("answered");

}
else{

btn.classList.add("notvisited");

}

});

}

document.getElementById("nextBtn")
.onclick=()=>{

if(currentQuestion<
questions.length-1){

currentQuestion++;

loadQuestion();

}

};

document.getElementById("prevBtn")
.onclick=()=>{

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

};

document.getElementById("reviewBtn")
.onclick=()=>{

if(!reviewQuestions.includes(currentQuestion)){

reviewQuestions.push(currentQuestion);

}

updatePalette();

};

document.getElementById("submitBtn")
.onclick=submitQuiz;

setInterval(()=>{

let min =
Math.floor(totalTime/60);

let sec =
totalTime%60;

document.getElementById("timer")
.innerHTML =
`${min}:${sec<10?"0":""}${sec}`;

totalTime--;

if(totalTime<0){

submitQuiz();

}

},1000);

function submitQuiz(){

let score=0;

questions.forEach((q,index)=>{

if(answers[index]===q.answer){

score++;

}

});

localStorage.setItem(
"score",
score
);

localStorage.setItem(
"attempted",
answers.filter(a=>a!==undefined).length
);

window.location.href=
"result.html";

}