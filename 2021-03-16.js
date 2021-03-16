https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 1234567890;
  
  answer = a.reduce((accu, value, index) => {
      return accu + (value*b[index]);
  }, 0)
  
  return answer;
}