const quizDB = [
  {
    question: "Q1.What is this",
    a: "hello",
    b: "hi",
    c: "noo",
    d: "ohooo",
    ans: "ans4",
  },
  {
    question: "Q2.What is this",
    a: "hello",
    b: "hi",
    c: "noo",
    d: "ohooo",
    ans: "ans4",
  },
  {
    question: "Q3.What is this",
    a: "hello",
    b: "hi",
    c: "noo",
    d: "ohooo",
    ans: "ans4",
  },
  {
    question: "Q4.What is this",
    a: "hello",
    b: "hi",
    c: "noo",
    d: "ohooo",
    ans: "ans4",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();
const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};
const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3>You scored ${score}/${quizDB.length}</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>`;
    showScore.classList.remove("scoreArea");
  }
});
