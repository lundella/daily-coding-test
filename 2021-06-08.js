// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  const dataTable = [];
  let dataDepth = numbers.length;
  let result = [];

  for(let index=0; index < dataDepth; index++) {
    if(index === 0) {
      dataTable.push([numbers[index]], [-numbers[index]])
    } else {
      const copyTable = Object.assign(dataTable);
    
      copyTable.forEach((value, copyIndex) => {
        const copyPath = Object.assign([], value);
        copyPath.push(-numbers[index]);
    
        dataTable[copyIndex].push(numbers[index]);
        dataTable.push(copyPath);
      })
    }
  }
  result = dataTable.filter(factor => {
    return factor.reduce((accu, value) => {
      return accu + value;
    }, 0) === target;
  }).length;

  return result;
}

console.log(solution([1,1,1,1,1], 3));
console.log(solution([1, 2, 1, 2], 2)) // 3
console.log(solution([1, 2, 1, 2], 6)) // 1