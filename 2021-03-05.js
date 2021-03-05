function solution(arr) {
    var answer = [];
    
    answer = arr.filter((value, index) => arr[index-1]!==value );
    
    return answer;
}