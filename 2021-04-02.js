// https://programmers.co.kr/learn/courses/30/lessons/12977

function getPrimeList(until) {
  const primeList = {};
  
  for(let iteration = 2; iteration <= until; iteration++) {
      primeList[iteration] = true;
  }
  
  for(let index = 2; index*index <= until; index++) {
      for(let multiple = index*index; multiple <=until; multiple+=index) {
          primeList[multiple] = false;
      }
  }
  
  return primeList;
}

function solution(nums) {
  const selectSet = [];
  const sumSet = [];
  let maxValue = 0;
  let primeSet = {};
  let result = [];
  
  for(let first =0; first < nums.length-2; first++) {
      selectSet[0] = nums[first];
      
      for(let second = first+1; second < nums.length-1; second++) {
          selectSet[1] = nums[second];
          
          for(let third = second+1; third < nums.length; third++) {
              selectSet[2] = nums[third];
              
              const sum = selectSet.reduce((acc, value) => acc + value, 0);
              
              sumSet.push(sum);
          }
      }
  }
  
  maxValue = Math.max(...sumSet);
  primeSet = getPrimeList(maxValue);
  result = sumSet.filter(element => primeSet[element]);
  
  return result.length;
}