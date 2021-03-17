// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0;
  
  for(let index = 1; index <= Math.ceil(n/2); index++) {
      if(!(n%index) && index <= parseInt(n/index)) {
          answer += index ;
          
          if(index !== parseInt(n/index)) {
              answer += parseInt(n/index);
          }
      }
  }
      
  return answer;
}