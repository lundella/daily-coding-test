// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  const stackBoard = [[], [], [], [], []];
  const basket = [];
  
  board.forEach((value, index) => {
      value.forEach((figure, index) => {
          if(value[index]) {
              stackBoard[index].splice(0, 0, value[index]);
          }
      })
  })
  
  moves.forEach(value => {
      const picked = stackBoard[(value-1)].pop();
      if(picked) {
          if(basket[basket.length-1] === picked) {
              basket.pop();
              answer += 2;
          } else {
              basket.push(picked);    
          }
      }
  })    
  
  return answer;
}