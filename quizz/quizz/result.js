let scoreplace = document.getElementById('finalscore');

let Addscore = document.createElement('h2');
let GetfromStorageScore = sessionStorage.getItem('score');
Addscore.textContent = GetfromStorageScore + "/";

let Questioncounter = document.createElement('h2');
let GetfromStorageQuestions = sessionStorage.getItem('questions');
Questioncounter.textContent = GetfromStorageQuestions;


scoreplace.appendChild(Addscore);
scoreplace.appendChild(Questioncounter);