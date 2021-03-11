// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  var answer = 0;
  
  const clothes = {};
  
  for(let index = 1; index <= n; index++) {
      clothes[index] = 1;
  }
  
  lost.forEach(student => {
      clothes[student]--;
  });
  
  reserve.forEach(student => {
      clothes[student]++;
  });
  
  Object.keys(clothes).forEach((student, index) => {
      if(!clothes[student]) {
          if(clothes[parseInt(student)-1] === 2) {
              clothes[parseInt(student)-1]--;
              clothes[student]++;
          } else if(clothes[parseInt(student)+1] === 2) {
              clothes[parseInt(student)+1]--;
              clothes[student]++;
          }
      }
  })
  
  Object.values(clothes).forEach(student => {
      if(student) {
          answer++;
      }
  })
  
  return answer;
}