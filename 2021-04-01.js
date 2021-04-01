// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  const answer = [];
  
  for(let index = 1; index <= n; index++) {
      answer.push(x*index)
  }
  
  return answer;
}