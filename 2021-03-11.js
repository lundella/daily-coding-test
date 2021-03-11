// https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
    var answer = '';
    
    for(let index = 0; index < seoul.length; index++) {
      if(seoul[index] === 'Kim') {
        answer = `김서방은 ${index}에 있다`;
        break;
      }
    }

    return answer;
}