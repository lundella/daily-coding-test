function solution(table, languages, preference) {
  var answer = '';
  let dividedPart = [];
  
  // table에서 language/point parsing
  dividedPart = table.map(value => {
      const rawArray = value.split(" ");

      rawArray.find(value => {

      })
      const table = { part: "" };

      for(let index = 1; index < rawArray.length; index++) {
        table.part = rawArray[0];

        languages.forEach(value => {

          if(rawArray[index] === value) {

          }
        })
      }
      return table;
  })
  console.log(dividedPart);

  
  
  
  // language 찾아서 점수 분야별 preference 합산 함수 만들기
  // 가장 큰 분야 찾고 동일 점수일 때 알파벳 오름차순 정렬
  
  
  
  return answer;
}

solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["PYTHON", "C++", "SQL"], [7, 5, 5])

