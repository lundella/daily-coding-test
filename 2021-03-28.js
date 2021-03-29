function solution(arr) {
  const answer = (arr.reduce((accu, value) => accu+value, 0)/arr.length)
  
  return answer;
}