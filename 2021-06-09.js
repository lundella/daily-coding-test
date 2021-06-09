// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
    const samplingArray = s.split('');
    const stack = [];
    
    samplingArray.forEach(value => {
        if(stack.length) {
            const target = stack[stack.length-1];
            if(target === value) {
                stack.pop();
            } else {
                stack.push(value);
            }
        } else {
            stack.push(value);
        }
    })
    
    return (stack.length)? 0: 1;
}