function solution(n) {
  let answer = [];
  const arrayType = n.toString().split('');
  
  arrayType.forEach((value, index) => {
      answer[n.toString().length-1-index] = parseInt(value);
  })

  return answer;
}