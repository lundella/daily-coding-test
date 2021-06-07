// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  const basket = [];
  
  moves.forEach(value => {
      const place = value-1;
      
      for(let index = 0; index < board.length; index++) {
          const picked = board[index][place];
          
          if(picked) {
              board[index][place] = 0;

              if(basket[basket.length-1] === picked ) {
                  basket.pop();
                  answer += 2;
              } else {
                  basket.push(picked);
              }
              break;
          }
      }
  })
  
  return answer;
}