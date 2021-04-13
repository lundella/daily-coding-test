function solution(priorities, location) {
  var answer = 0;
  let iterationCount = 0;
  const ordered = [];
  const formatted = priorities.map((value, index) => {
      return {[index] : value};
  })
  
  // console.log(formatted);
  
  while(formatted.length) {
      const target = formatted.shift();

      if(Object.values(target)[0] < Math.max(...Object.values(formatted))) {
          formatted.push(target);
      } else {
          ordered.push(Object.values(target)[0]);
      }
      console.log(formatted)
  }
  console.log(ordered);
  
  return answer;
}