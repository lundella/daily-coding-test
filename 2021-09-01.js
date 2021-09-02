function rank(point) {
    let result = "";
    if(90 <= point) {
      result = "A";
    } else if (80 <= point) {
      result = "B";
    } else if (70 <= point) {
      result = "C";
    } else if (50 <= point) {
      result = "D";
    } else {
      result = "F";
    }

    return result;
}

function solution(scores) {
  const pointList = [];
  let ranked = '';
  
  for(let checker = 0; checker < scores.length; checker++) {
      let checkList = scores[checker];
      
      for(let student = 0; student < checkList.length; student++) {
          if(!pointList[student]) {
              pointList[student] = [];
          }
          pointList[student].push(checkList[student]);
      }
  }
  
  for(let student = 0; student < pointList.length; student++) {
      const max = Math.max(...pointList[student]);
      const min = Math.min(...pointList[student]);
      
      console.log(max, min);
      let foundMatch = pointList[student].filter((point, index) => {
        let target = -1;
        if(index === student) {
          target = point;
        }
          return (target === max) || (target === min);    
      }).length;
      
      // console.log(foundMatch);
  
      if(foundMatch === 1) {
          pointList[student].splice(student, 1);
      }
      
      console.log(pointList[student])
      ranked += rank(pointList[student].reduce((accu, value) => {
        return accu + value;
      }, 0)/pointList[student].length);
  }
  
  console.log(ranked);
  return ranked;
}

// solution([[70, 49, 90], [68, 50, 38], [73, 31, 100]]);
solution([[1,100,100],[0,100,100],[0,100,100]]);
// solution([[100, 90, 20], [100, 87, 70], [100, 40, 20]]);