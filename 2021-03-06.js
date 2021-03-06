function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter(element => element % divisor === 0)

  if (!answer.length) {
    answer.push(-1);
  } else {
    answer.sort((a, b) => a - b)
  }

  return answer;
}