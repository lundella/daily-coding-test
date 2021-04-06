// https://programmers.co.kr/learn/courses/30/lessons/17681
function changeToMap(arr, length) {
  return arr.map((value, row) => {
      let twoDigits = value.toString(2);
      if(twoDigits.length < length) {
          for(let iteration = 0; iteration < (length-value.toString(2).length); iteration++) {
              twoDigits = '0' + twoDigits ;
          }
      }
      return twoDigits;
  })
}

function solution(n, arr1, arr2) {                    
  const firstMap = changeToMap(arr1, n);
  const secondMap = changeToMap(arr2, n);
  const answer = firstMap.map((value, row) => {
      const firstRow = value.split('');
      const secondRow = secondMap[row].split('');
      
      let result = '';

      for(let index = 0; index < n; index++) {
          if(parseInt(firstRow[index]) || parseInt(secondRow[index])) {
              result += '#';
          } else {
              result += " "
          }
      }
      return result;
  });
  
  return answer;
}