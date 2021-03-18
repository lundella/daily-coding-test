// https://programmers.co.kr/learn/courses/30/lessons/12930#

function solution(s) {
  let answer = '';
  const target = s.split(' ');
  
  answer = target.map(word => {
      let result = '';
      for(let index = 0; index < word.length; index++) {
          result += (index%2)? word[index].toLowerCase(): word[index].toUpperCase();
      }
      return result;
  })
  
  return answer.join(' ');
}