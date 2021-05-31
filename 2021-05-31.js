// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  const divisorCount = {};
  
  for(let index = left; index <= right; index++) {
      for(let target = 1; target <= index; target++) {
          if(!(index%target)) {
              if(!divisorCount[index]) {
                  divisorCount[index] = 1;
              } else {
                  divisorCount[index]++;
              }
          }
      }
  }
  
  const result = Object.keys(divisorCount).reduce((accu, value, index) => {
      const rangeNumber = parseInt(value);
      return accu += (divisorCount[value]%2)? -rangeNumber : rangeNumber;
  }, 0)
  
  return result;
}