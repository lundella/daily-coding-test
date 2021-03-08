// https://programmers.co.kr/learn/courses/30/lessons/1845#
function solution(nums) {
  const selectedLimit = nums.length/2;
  const kindsCount = Object.keys(nums.reduce((accu, type)=> {
      if(accu[type] !== undefined) {
          accu[type] = accu[type] + 1;
      } else {
          accu[type] = 0;
      }
      
      return accu;
  }, {})).length;
  
  return (kindsCount > selectedLimit)? selectedLimit: kindsCount;
}