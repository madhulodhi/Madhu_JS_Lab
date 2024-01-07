function Quiz(questions) {
    this.score = 0;
    this.questions = questions
    this.questionIndex = 0
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices= choices;
    this.answer = answer;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length
}

let questions = [
    new Question("Javascript Supports", ["Functions", "XTML", "XML", "CSS"], "Functions"),

    new Question("Which language is used for Styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),

    new Question("What does HTML stand for?", ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"], "Hyper Text Markup Language"),

    new Question("What is the capital of France?", ["Berlin", "Madrid", "Paris", "Rome"], "Paris"),

    new Question("Which programming language is known as the 'language of the web'?", ["Java", "Python", "JavaScript", "C++"], "JavaScript"),

    new Question("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Saturn", "Earth"], "Jupiter"),

    new Question("Who wrote 'Romeo and Juliet'?", ["Charles Dickens", "Jane Austen", "William Shakespeare", "Homer"], "William Shakespeare"),

    new Question("Which country is known as the 'Land of the Rising Sun'?", ["China", "South Korea", "Japan", "Vietnam"], "Japan"),

    new Question("What is the capital of Canada", ["Toronto", "Ottawa", "Vancouver", "Montreal"], "Ottawa"),

    new Question("Who painted the Mona Lisa?", ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], "Leonardo da Vinci")

]
Quiz.prototype.getQuestionByIndex = function() {
return this.questions[this.questionIndex]
}
Question.prototype.isCorrectAnswer= function(choice) {
    return this.answer === choice
}
Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
let quiz = new Quiz(questions);
function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        let questionText = document.getElementById("question")
        questionText.innerHTML= quiz.getQuestionByIndex().text
        let choices = quiz.getQuestionByIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice"+i)
            element.innerHTML = choices[i];
            handleOptionButton("btn"+i, choices[i])
        }
        showProgress();
    }
}

function handleOptionButton(id, choice) {
let btn = document.getElementById(id)
btn.onclick= function() {
    quiz.checkOptionWithAnswer(choice);
    loadQuestions();
}
};
function showProgress() {
let currntQues = quiz.questionIndex +1;
let elem = document.getElementById("progress")
elem.innerHTML = `Question ${currntQues} of ${quiz.questions.length}`
}
function showScores() {
let gameEnded = "<h1>Result</h1>"
gameEnded += "<h2>Your scores :" + quiz.score + " and Percentage is "+ (quiz.score/questions.length*100) +"</h2>";
document.getElementById("quiz").innerHTML = gameEnded
}
loadQuestions();


