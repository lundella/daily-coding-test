function solution(s){
  var count = 0;

  s.toLowerCase().split('').forEach(char => {
      if(char === 'p') {
          count++;
      }
      if(char === 'y') {
          count--;
      }
  })

  return (!count);
}