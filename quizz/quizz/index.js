// Déclaration du tableau comprenant les questions, réponses et la bonne réponse

let myQuestions = [
  {
      question: "Quels sont les dates de début et de fin de la seconde guerre mondiale ?",
      answer: ["1940/1945", "1939/1945", "1938/1944", "-1939/-1945 avant JC"],
      correctAnswer: "1939/1945"
  },
  {
      question: "Combien de mort y’a t’il eu pendant cette guerre ?",
      answer: ["70 millions", "720 millions", "90 millions", "60 millions"],
      correctAnswer: "60 millions"
  },
  {
      question: "Qui se conflit oppose t'il ?",
      answer: ["Les alliés et l'axe","les copains et les colabos","le PRG et le FN", "les gentils et les mechants"],
      correctAnswer: "Les alliés et l'axe"
  }
]

// Déclarations de toutes les variables utilisées

let score = 0;
let counter = 1;
let i = 0;
let j = 0;
let reponse;
let finished = false;
let buttons = document.getElementById('buttons')
let finalresult = document.getElementById('finalresult')
let setquestion = document.querySelector('#question')
let settings = document.querySelectorAll('.option') // settings.length = 4
let eventoptions = document.querySelector('option')

// Garde en mémoire les questions et le nombre de réponses juste

sessionStorage.removeItem('score')
sessionStorage.removeItem('questions')

// Fonction principale qui décide de passer la prochaine question  si on a cliquer et choisis une réponse et d'ajouter ou non un point si la réponse est bonne

function SetQuestions() {
  for (j = 0; j < settings.length; j++) {
    settings[j].textContent = myQuestions[i].answer[j]
    settings[j].setAttribute('value', myQuestions[i].answer[j])
  }
  setquestion.textContent = myQuestions[i].question;
  document.getElementById("score").innerHTML = "Votre score : " + score;
  document.getElementById("question-counter").textContent = counter + "/" + myQuestions.length;
}
  
SetQuestions();

  for (let k = 0; k < settings.length; k++) {
    settings[k].onclick = function(evt) {
      reponse = evt.target.value;
    if (counter == myQuestions.length) {
      finished = true;
      if (finished == true) { // creer un bouton qui permet de voir le résultat final si on a fini de répondre a toutes les questions
        console.log(finished);
        sessionStorage.setItem('questions', myQuestions.length); 
        let addButton = document.createElement('a'); 
        addButton.setAttribute('class', 'btn btn-danger')
        addButton.setAttribute('href', 'resultat.html')
        addButton.textContent = "Voir Resultats";
        finalresult.appendChild(addButton)
      }
    }
    }
  }
buttons.addEventListener('click', function() {
    if (counter <= myQuestions.length) { // aditionne et compte le nombre de questions
      counter++
      if (reponse == myQuestions[i].correctAnswer) {
        score++;
        i++;
        sessionStorage.setItem('score', score); // garde le score en mémoire
        if (i != myQuestions.length) {
          SetQuestions();
        }
      } else {
        i++
        sessionStorage.setItem('score', score); // garde le score en mémoire
        if (i != myQuestions.length) {
          SetQuestions();
        }
      }
      document.getElementById("score").innerHTML = "Votre score : " + score; // affiche le score en direct
    }
})
