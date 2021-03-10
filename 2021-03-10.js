// https://programmers.co.kr/learn/courses/30/lessons/12918#

function solution(s) {
  let answer = true;

  if (s.length === 0) {
    return answer;
  } else if (!((s.length === 4) || (s.length === 6))) {
    answer = false;
    return answer;
  }

  for (let index = 0; index < s.length; index++) {
    if (isNaN(parseInt(s[index]))) {
      answer = false;
      break;
    }
  }
  return answer;
}