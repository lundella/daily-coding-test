// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0;
  
  for(let index = 1; index <= n; index++) {
      if(!(n%index)) {
          answer += index;
      }
  }
  
  return answer;
}