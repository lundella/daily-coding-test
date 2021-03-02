function solution(a, b) {
  let answer = ''; 
  const today = new Date(2016, a-1, b);
  const options = { weekday: 'short'};

  answer = today.toLocaleDateString('en-US', options).toUpperCase();

  return answer;
}