const questions = [
    {
        question: "Quelle est la fonction de base de la porte logique ET ?",
        answers: [
            { text: "Addition binaire", correct: false},
            { text: "Multiplication binaire", correct: true},
            { text: "Soustraction binaire", correct: false},
            { text: "Division binaire", correct: false},
        ]
    },
    {
        question: "Quelle est la sortie de la porte logique OU exclusif si les entrees sont toutes les deux a l'etat haut (1) ?",
        answers: [
            { text: "0", correct: true},
            { text: "1", correct: false},
            { text: "Erreur", correct: false},
            { text: "Depend de la charge connectee à la sortie", correct: false},
        ]
    },
    {
        question: "Quelle est la fonction logique de la porte logique NON ?",
        answers: [
            { text: "Elle inverse l'entree", correct: true},
            { text: "Elle multiplie l'entree par -1", correct: false},
            { text: "Elle ajoute 1 à l'entree", correct: false},
            { text: "Elle divise l'entree par 2", correct: false},
        ]
    },
    {
        question: "Combien de transistors sont necessaires pour implementer une porte logique NOR a deux entrees ?",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
        ]
    },
    {
        question: "Quelle est la fonction logique de la porte logique OU exclusif ?",
        answers: [
            { text: "Elle renvoie 1 si les deux entrees sont egales", correct: false},
            { text: "Elle renvoie 1 si l'une des deux entrees est egale à 1", correct: true},
            { text: "Elle renvoie 0 si les deux entrees sont egales", correct: false},
            { text: "Elle renvoie 0 si l'une des deux entrees est egale a 0", correct: false},
        ]
    },
    {
        question: "Comment peut-on implementer une porte logique NON ET à partir d'autres portes logiques ?",
        answers: [
            { text: "En utilisant une porte logique NON suivie d'une porte logique ET", correct: false},
            { text: "En utilisant une porte logique OU suivie d'une porte logique NON", correct: true},
            { text: "En utilisant une porte logique ET suivie d'une porte logique NON", correct: false},
            { text: "En utilisant une porte logique OU exclusif suivie d'une porte logique NON", correct: false},
        ]
    },
    {
        question: "Quelle est la fonction de base de la porte logique NAND ?",
        answers: [
            { text: "Addition binaire", correct: false},
            { text: "Multiplication binaire", correct: false},
            { text: "Soustraction binaire", correct: false},
            { text: "Negation de la fonction ET", correct: true},
        ]
    },
    {
        question: "Quelle est la sortie de la porte logique NON OU si les entrees sont toutes les deux a l'etat bas (0) ?",
        answers: [
            { text: "0", correct: false},
            { text: "1", correct: true},
            { text: "Erreur", correct: false},
            { text: "Depend de la charge connectee a la sortie", correct: false},
        ]
    },
    {
        question: "Comment peut-on implementer une porte logique OU exclusif a partir d'autres portes logiques ?",
        answers: [
            { text: "En utilisant une porte logique OU, une porte logique ET et une porte logique NON", correct: true},
            { text: "En utilisant une porte logique ET, deux portes logiques OU et une porte logique NON", correct: false},
            { text: " En utilisant une porte logique NON, deux portes logiques ET et une porte logique OU", correct: false},
            { text: "En utilisant une porte logique NOR, deux portes logiques ET et une porte logique NON", correct: false},
        ]
    },
    {
        question: "Quelle est la sortie de la porte logique ET si l'une des deux entrees est a l'etat bas (0) ?",
        answers: [
            { text: "0", correct: true},
            { text: "1", correct: false},
            { text: "Erreur", correct: false},
            { text: "Depend de la charge connectee a la sortie", correct: false},
        ]
    },
    {
        question: "Comment peut-on implementer une porte logique NON OU a partir d'autres portes logiques ?",
        answers: [
            { text: "En utilisant une porte logique NON suivie d'une porte logique OU", correct: true},
            { text: "En utilisant une porte logique OU exclusif suivie d'une porte logique NON", correct: false},
            { text: "En utilisant une porte logique NOR suivie d'une porte logique NON", correct: false},
            { text: "En utilisant une porte logique ET suivie d'une porte logique NON", correct: false},
        ]
    },
    {
        question: "Quelle est la sortie de la porte logique NOR si les deux entrees sont a l'etat haut (1) ?",
        answers: [
            { text: "0", correct: true},
            { text: "1", correct: false},
            { text: "Erreur", correct: false},
            { text: "Depend de la charge connectee a la sortie", correct: false},
        ]
    },
    {
        question: "Quelle est la difference entre une porte logique ET et une porte logique OU ?",
        answers: [
            { text: "La porte logique ET renvoie 1 si toutes les entrees sont a l'etat haut, tandis que la porte logique OU renvoie 1 si au moins une entree est a l'etat haut", correct: true},
            { text: "La porte logique ET renvoie 1 si l'une des entrees est a l'etat haut, tandis que la porte logique OU renvoie 1 si toutes les entrees sont a l'etat haut", correct: false},
            { text: "La porte logique ET renvoie 0 si toutes les entrees sont à l'etat haut, tandis que la porte logique OU renvoie 0 si toutes les entrées sont a l'etat bas", correct: false},
            { text: "La porte logique ET renvoie 0 si l'une des entrees est a l'etat bas, tandis que la porte logique OU renvoie 0 si au moins une entrée est a l'etat bas", correct: false},
        ]
    },
    {
        question: "Comment peut-on implementer une porte logique NAND a partir d'autres portes logiques ?",
        answers: [
            { text: "En utilisant une porte logique NON suivie d'une porte logique ET", correct: true},
            { text: "En utilisant une porte logique NON suivie d'une porte logique OU", correct: false},
            { text: "En utilisant une porte logique ET suivie d'une porte logique NON", correct: false},
            { text: "En utilisant une porte logique OU suivie d'une porte logique NON", correct: false},
        ]
    },
    {
        question: "Quelle est la fonction de base de la porte logique NON ET ?",
        answers: [
            { text: "Elle renvoie 1 si toutes les entrees sont a l'etat haut", correct: false},
            { text: "Elle renvoie 0 si toutes les entrées sont a l'etat haut", correct: false},
            { text: "Elle renvoie 1 si au moins une entree est a l'etat bas", correct: true},
            { text: "Elle renvoie 0 si au moins une entree est a l'etat bas", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Suivant";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => { 
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Votre score est ${score}/${questions.length}`;
    nextButton.innerHTML = "Jouez une autre fois";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();


