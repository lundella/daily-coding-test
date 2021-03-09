// https://programmers.co.kr/learn/courses/30/lessons/68935#

function solution(n) {
  let answer = '';
  let target = n;
  let remainder = [];
  let iteration = true;
  const base = 3;

  while(iteration) {      
    if(!parseInt(target/base)) {
        iteration = false;
    }
      
    remainder.push(target%base);
    target = parseInt(target/base);
  }
  
  answer = remainder.reduce((accu, value, index) => {
    const power = (remainder.length-(index+1));
    return accu + (Math.pow(base, power) * value);
  }, 0);

  return answer;
}