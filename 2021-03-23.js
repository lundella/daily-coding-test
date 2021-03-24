// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let minIndex = 0;
  
  if(arr.length <= 1) {
      return [-1];
  }
  
  for(let index = 1; index < arr.length; index++) {
      if(arr[minIndex] > arr[index] ) {
         minIndex = index;
      }
  }
  arr.splice(minIndex, 1);

  return arr;
}