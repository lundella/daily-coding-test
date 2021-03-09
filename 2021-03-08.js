// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
  var answer = true;

  var arrayString = s.split('');
  var count = 0;
  
  arrayString.forEach((char, index) => {
      let standardChar = char.toLowerCase();
      if(standardChar === 'p') {
          count++;
      } else if(standardChar === 'y') {
          count--;
      }
  })
  
  if(count) {
      answer = false;
  }

  return answer;
}