// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const targetArray = x.toString().split('');
  const sum = targetArray.reduce((accu, value) => accu+parseInt(value), 0);
  
  return (x%sum)? false : true;;
}