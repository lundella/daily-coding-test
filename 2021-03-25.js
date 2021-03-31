// https://programmers.co.kr/learn/courses/30/lessons/67256

function distance(position, target) {
  return Math.abs(target[0] - position[0]) + Math.abs(target[1] - position[1]);
}

function solution(numbers, hand) {
  let answer = '';

  const positions = { 
    1: [0, 0], 2: [0, 1], 3: [0, 2], 
    4: [1, 0], 5: [1, 1], 6: [1, 2], 
    7: [2, 0], 8: [2, 1], 9: [2, 2], 
    "*": [3, 0], 0: [3, 1], "#": [3, 2] 
  };

  const places = { 'left': '*', 'right': '#' };

  numbers.forEach((value) => {
    if (value && !(value % 3)) {
      places['right'] = value;
      answer += 'R';
    } else if ((value % 3) === 1) {
      places['left'] = value;
      answer += 'L';
    } else {
      const leftDistance = distance(positions[places['left']], positions[value]);
      const rightDistance = distance(positions[places['right']], positions[value]);

      if (leftDistance < rightDistance) {
        answer += 'L';
        places['left'] = value;
      } else if (leftDistance > rightDistance) {
        answer += 'R';
        places['right'] = value;
      } else {
        answer += (hand === 'right') ? 'R' : 'L';
        places[hand] = value;
      }
    }
  })

  return answer;
}