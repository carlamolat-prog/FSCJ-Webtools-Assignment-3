/*Quiz Questions*
const questions = [
  {
    text: "Which of these highways parallels the Atlantic Ocean?",
    choices: ["I-10", "I4", "US-17", "A1A"],
    answer: 4
  },
  {
    text: "Which of these cities is the northernmost of the Jacksonville Beaches?",
    choices: ["Atlantic Beach", "Neptune Beach", "Jacksonville Beach", "Ponte Vedra Beach"],
    answer: 1
  },
  {
    text: "Which of these cities is the southernmost of the Daytona Beaches?",
    choices: ["Ormond Beach", "Daytona Beach", "Daytona Beach Shores", "Ponce Inlet"],
    answer: 4
  },
  {
    text: "Which of these counties does SR-436 pass through?",
    choices: ["Osceola", "Orange", "Volusia", "Duval"],
    answer: 2
  },
  {
    text: "What city is known as 'The City Beautiful'?",
    choices: ["Deland", "Orlando", "Sanford", "Debary"],
    answer: 2
  },
  {
    text: "Which university is located in Daytona Beach?",
    choices: ["Petrograd State University", "University of North Florida", "Embry-Riddle Aeronautical University", "DeVry University"],
    answer: 3
  }
];

/*State*/
let currentIndex = 0;
let score = 0;

/*DOM Elements*/
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
