// https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  var answer = 0;
  var samples = {};
  
  for(var index = 2; index <= n; index++) {
      samples[index] = index;
  }
  
  
  for(var order = 2; order <= n; order++) {
      if(samples[order] !== 0) {
          for(var multiple = 2*order; multiple <= n; multiple+=order) {
              samples[multiple] = 0;
          }
      }
  }
  
  for(var index= 2; index <= n; index++) {
      if(samples[index]) {
          answer++;
      }
  }
  
  return answer;
}