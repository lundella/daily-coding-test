// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6
  }
  let superNumCount = 0;
  let matchCount = 0;

  lottos.forEach(value => {
    if(!value) {
      superNumCount++;
    } else {
      if(win_nums.includes(value)) {
        matchCount++;
      }
    }
  })

  return [ranking[matchCount + superNumCount], ranking[matchCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));