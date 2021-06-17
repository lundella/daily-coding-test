// https://programmers.co.kr/learn/courses/30/lessons/60057#

function solution(s) {
    let tLength = 1;
    let target = s.slice(0, 1);
    let count = 0;
    let result = "";
    let shortestPress = 0;
    
    if(s.length === 1) {
        return 1;
    }

    while(tLength <= Math.floor(s.length/2)) {
        for(let index = 0; index < s.length+tLength; index+=tLength) {
            if(target === s.slice(index, index+tLength)) {
                count++;
            } else {
                result = result + ((count > 1)? count + target: target);
                target = s.slice(index, index+tLength);
                count = 1;
            }
        }

        shortestPress = (shortestPress) ? (shortestPress > result.length)? result.length: shortestPress : result.length;

        tLength++;

        result = '';
    }
    return shortestPress;
}