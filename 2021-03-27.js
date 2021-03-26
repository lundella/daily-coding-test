// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let target = num;
  let count = 0;

  while ((target !== 1) && (count < 500)) {
    if (target % 2) {
      target = (target * 3) + 1;
    } else {
      target = target / 2;
    }
    count++;
  }
  
  return (count < 500) ? count : -1;
}