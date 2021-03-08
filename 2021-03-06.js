function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter(target => !(target % divisor)).sort((a, b) => a - b);

  if (!answer.length) {
    answer.push(-1);
  }

  return answer;
}