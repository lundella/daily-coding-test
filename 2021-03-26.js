// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  var answer = [];
  
  let multiple = m;
  let divisor = n;
  let multipleIndex = 1;

  while(!answer[1]) {
      if(multiple%n) {
          multipleIndex += 1;
          multiple = m*multipleIndex;
      } else {
          answer[1] = multiple;
      }
  }
  
  while(!answer[0]) {
      if(!(m%divisor) && !(n%divisor)) {
          answer[0] = divisor;
      } else {
          divisor -= 1;
      }
  }
  
  return answer;
}