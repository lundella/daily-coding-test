function solution(s) {
  let answer = '';
  const length = s.length;
  const halfOfLength = (length / 2);

  if ((length % 2)) {
    answer = s[Math.ceil(halfOfLength) - 1];
  } else {
    answer = s[halfOfLength - 1] + s[halfOfLength];
  }

  return answer;
}