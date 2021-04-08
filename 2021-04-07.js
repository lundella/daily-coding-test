// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const result = {};
  const failRates = {};
  let targetSum = 0;

  stages.forEach(value => {
      if(result[value] === undefined) {
          result[value] = 0;
      }
      result[value] += 1;
  })
  
  targetSum = (result[N+1])? result[N+1]: 0;
  
  for(let index = N; 0 < index; index--) {
      const validCount = (result[index])? result[index]: 0; 
      targetSum += validCount;

      failRates[index] = (validCount/targetSum); 
  }

  return Object.keys(failRates).sort((a, b) => failRates[b] - failRates[a]).map(value => parseInt(value));;
}