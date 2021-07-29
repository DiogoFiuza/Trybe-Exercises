const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corect = (rightAnswers, answers, callback) => {
  let total = 0;
   for(let index in rightAnswers) {
     const countReturn = callback(rightAnswers[index],answers[index]);
     total += countReturn;
   }
  return `Nota total é de ${total}`
}

const countGrade = (rightAnswers, answers) => {
    if(rightAnswers === answers){
      return 1;
    } else if(answers === 'N.A'){
      return 0;
    } else {
      return -0.5;
    }
};
console.log(corect(RIGHT_ANSWERS, STUDENT_ANSWERS, countGrade));

