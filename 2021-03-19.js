// https://programmers.co.kr/learn/courses/30/lessons/12931
// 1의 자리를 누적하여 합산

function solution(n)
{
    let answer = 0;

    for(let index = 0; index < 9; index++) {
        if(!n) { 
            break; 
        }
        answer += (n%Math.pow(10, 1));
        n = parseInt(n/10);        
    }

    return answer;
}