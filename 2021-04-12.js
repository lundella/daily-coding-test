// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
    const maxFinder = Object.assign([], priorities);
    const ordered = [];
    const formatted = priorities.map((value, index) => {
        return {[index] : value};
    })

    while(formatted.length) {
        const target = formatted.shift();
        const value = Object.values(target)[0];
        
        if(value < Math.max(...maxFinder)) {
            formatted.push(target);
        } else {
            maxFinder.splice(maxFinder.findIndex(element => element === value), 1);

            ordered.push(target);
        }
    }
    
    return ordered.findIndex(element => element[location])+1;
}