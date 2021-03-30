// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const answer = phone_number.split('').map((number, index) => {
      return (index < phone_number.length-4)? '*' : number;
  }).join('');
  
  return answer;
}