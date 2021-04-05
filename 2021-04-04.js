// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  let answer = 0;
  let remainder = budget;
  
  d.sort((a,b) => a-b);
  
  for(let index = 0; index < d.length; index++) {
      if(remainder < d[index]) {
          break;
      }
      remainder -= d[index];
      answer +=1;
  }
  
  return answer;
}