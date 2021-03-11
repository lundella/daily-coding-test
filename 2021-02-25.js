// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  var answer = '';
  var object = {};
  
  for(let index = 0; index < completion.length; index++) {
      if(object[completion[index]]) {
          object[completion[index]] = object[completion[index]]+1;
      } else {
          object[completion[index]] = 1;
      }
  }

  participant.forEach(athlete => {
      if(object[athlete]) {
          object[athlete] = object[athlete]-1;
      } else {
          answer = athlete;
      }
  })
  
  return answer;
}