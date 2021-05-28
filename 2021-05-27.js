// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = '';
  let beginIndex = 0;
  let endIndex = 0;

  answer = new_id.toLowerCase();
  console.log('1.make lower case: ', answer);
  answer = answer.match(/[a-z0-9._-]/g).join('');
  console.log('2.match auth char: ', answer);
  answer = answer.replace(/(\.)\1+/g, '$1');
  console.log('3.change dot count: ', answer);

  beginIndex = (answer[0] === '.') ? 1: 0;
  endIndex = (answer[answer.length-1] === '.') ? answer.length-1: answer.length;
  
  answer = answer.slice(beginIndex, endIndex);
  
  console.log('4.!start&end . : ', answer);
  
  if((answer === null) || (answer === undefined) || (answer === '')) {
      answer = 'a';
      console.log('5.insert "a"', answer);
  }
  
  answer = answer.slice(0, 15);
  console.log('6.trim string length', answer.length);
  endIndex = (answer[answer.length-1] === '.') ? answer.length-1: answer.length;
  
  console.log(`begin, end index: ${beginIndex}, ${endIndex}`)
  answer = answer.slice(0, endIndex);
  
  while(answer.length <= 2) {
      answer += answer[answer.length-1]
      console.log('7.minimum size correct: ', answer);
  }
  
  console.log('result: ', answer);
  return answer;
}