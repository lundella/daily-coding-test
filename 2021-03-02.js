function solution(a, b) {
  let answer = '';
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  
  const today = new Date('2016', a-1, b);
  
  answer = days[today.getDay()];
  
  return answer;
}