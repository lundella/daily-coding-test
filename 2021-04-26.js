// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  let iteration = true;
  let added = Object.assign([], progresses);
  
  while(iteration) {
      let last = 0;
      let start = false;

      added = added.map((value, index) => {
          const adding = value + speeds[index];
          
          if(100 <= adding && !index) {
              start = true;
              last++;
          } else if(100 <= adding && start) {
              last++;
          } else {
              start = false;
          }
          
          return adding;
      })

      if(last) {
        answer.push(last);
      }
      added.splice(0, last);
      speeds.splice(0, last);
      iteration = added.length;
  }

  return answer;
}