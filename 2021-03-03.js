// https://programmers.co.kr/learn/courses/30/lessons/68935#

function solution(n) {
  let sum = '';
  let target = n;
  let result = [];
  let iteration = true;
  const base = 3;

  while(iteration) {      
    if(!parseInt(target/base)) {
        iteration = false;
    }
      
    result.push(target%base);
    target = parseInt(target/base);
  }
  
  sum = result.reduce((accu, value, index) => {
    const power = (result.length-(index+1));
    return accu + (Math.pow(base, power) * value);
  }, 0);

  return sum;
}