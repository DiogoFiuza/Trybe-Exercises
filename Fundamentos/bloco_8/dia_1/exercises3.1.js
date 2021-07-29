// Resolução diferente para a questão 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corect = (rightAnswers, answers, callback) => {
   return callback(rightAnswers,answers);
}

const countGrade = (rightAnswers, answers) => {
  let sumGrade = 0;
  let total = 0;
  for(let index in rightAnswers) {
    if(rightAnswers[index] === answers[index]){
      sumGrade += 1;
      total += 1;
    } else if (answers[index] === 'N.A'){
      sumGrade += 0;
    } else {
      sumGrade -= 0.5;
    }
  }
  return ` A nota total é ${sumGrade}, foram acertadas ${total}`;
};

console.log(corect(RIGHT_ANSWERS, STUDENT_ANSWERS, countGrade));