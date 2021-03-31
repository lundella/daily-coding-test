// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  return arr1.map((value, row) => value.map((factor, index) => factor + arr2[row][index]));
}