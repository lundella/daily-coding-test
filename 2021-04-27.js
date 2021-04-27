// https://programmers.co.kr/learn/courses/30/lessons/60057

function splitString(s, number) {
  const iterationLimit = parseInt(s.length/number);
  const result = [];
  
  for(let start = 0; start < iterationLimit; start+=number) {
      result.push(s.substr(start, number));
  }
  return result;
}

function solution(s) {
  var answer = 0;
  const result = [];
  
  // s의 길이의 절반 길이까지 반복    
  for(let index = 1; index <= parseInt(s.length/2); index++) {
      // s를 index 단위로 분할
      const devided = splitString(s, index);
      let counting = 1;
      let zippedString = '';
      
      // 분할된 내용이 몇개까지 반복되는지 체크
      devided.forEach((value, index) => {
          if(value === devided[index+1]) {
              counting++;
          } else {
              if(1 < counting) {
                  zippedString += counting + value;
                  counting = 1;
              }
          }
      })
      console.log(zippedString);
      
      // 수량 + 분할 내용 조합하여 출력
      
      
  }
  
  
  
  
  // console.log(s)
  return answer;
}