function solution(s) {
  if (!s) {
    return true;
  } else if (s.length !== (4 || 6)) {
    return false;
  }

  var answer = true;
  var searchString = s.match(/[a-z]/gi);

  answer = searchString ? false : true;

  return answer;
}