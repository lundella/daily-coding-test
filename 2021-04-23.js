// https://programmers.co.kr/learn/courses/30/lessons

function divide(n) {
  let target = parseInt(n/3);
  let last = '';
  let result = '';
  
  if((target>1) && (n%3)) {
      target = divide(target);
  } else if((target>1) && !(n%3)) {
      target = divide(target-1);
  } else {
      target = (target && (n%3))? target: '';
  }
  
  last = (n%3)? (n%3): '4';
  result = target.toString() + last;
  
  return result;
}

function solution(n) {
  return divide(n).toString();
}