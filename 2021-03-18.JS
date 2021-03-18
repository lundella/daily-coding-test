function solution(s) {
  let answer = '';
  let wordIndex = 0
  const target = s.split('');
  
  answer = target.map(char => {
      let result = '';
      if(char.trim()) {
          result = (wordIndex%2) ? char.toLowerCase(): char.toUpperCase();
          wordIndex++;
      } else {
          result = char;
          wordIndex = 0;
      }
      return result;
  })

  return answer.join('');
}