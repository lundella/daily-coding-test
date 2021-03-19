// https://programmers.co.kr/learn/courses/30/lessons/12931
// 내부 함수 사용

function solution(n)
{
    return n.toString().split('').reduce((sum, value) => sum+parseInt(value), 0);
}