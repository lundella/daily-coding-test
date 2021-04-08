// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let pointIndex = 0;
  const exponents = { S: 1, D: 2, T: 3 };
  const resultSet = [];

  dartResult.split('').forEach((char, index) => {
    if (char.match(/S|D|T/)) {
      const point = dartResult.slice(pointIndex, index);
      let nextPoint = index + 1;

      resultSet.push(Math.pow(point, exponents[char]));

      if (dartResult[nextPoint] && dartResult[nextPoint].match(/\*|\#/)) {
        if (dartResult[nextPoint] === '*') {
          resultSet[resultSet.length - 1] = resultSet[resultSet.length - 1] * 2;
          if (resultSet[resultSet.length - 2]) { resultSet[resultSet.length - 2] = resultSet[resultSet.length - 2] * 2; }
        } else {
          resultSet[resultSet.length - 1] = resultSet[resultSet.length - 1] * -1;
        }
        nextPoint++;
      }

      pointIndex = nextPoint;
    }
  })

  return resultSet.reduce((accu, value) => accu + value, 0);
}