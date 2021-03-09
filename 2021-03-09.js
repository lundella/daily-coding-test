// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  return s.split('').sort((a, b) => {
      return (a < b)? 1: -1
  }).join('');
}