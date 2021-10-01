// https://programmers.co.kr/learn/courses/30/lessons/83201
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

  function findExtremeValue(student, extremevalue) {
    if(pointList[student].findIndex(element=>element === extremevalue) === student) {
      return pointList[student].filter(point => {
        return point === extremevalue;
      }).length;
    } else {
      return 0;
    }
  }
  
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
      let max = Math.max(...pointList[student])
      let min = Math.min(...pointList[student]);
      
      max = (max > 100)? 100: max;
      min = (min > 100)? 100: min;

      if(findExtremeValue(student, max) === 1) {
          pointList[student].splice(student, 1);
      }

      if(findExtremeValue(student, min) === 1) {
        pointList[student].splice(student, 1);
    }

      ranked += rank(pointList[student].reduce((accu, value) => {
        return accu + value;
      }, 0)/pointList[student].length);
  }
  
  return ranked;
}

// solution([[70, 49, 90], [68, 50, 38], [73, 31, 100]]);
// solution([[50,50,200],[100,80,100],[100,50,100]]);
// solution([[50, 51, 49], [49, 50, 51], [51, 49, 50]]);
solution([[75, 50, 100], [75, 100, 20], [100, 100, 20]]);