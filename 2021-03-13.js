// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  var answer = '';
  const stringSet = ['수', '박'];
  
  for(let index = 0; index < n; index++) {
      answer += stringSet[(index%2)];
  }
  
  return answer;
}