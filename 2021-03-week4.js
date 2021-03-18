function solution(lines) {
  let answer = 0;
  let result = {};
  
  // 시작 시간 끝 시간 계산 O
  // 초까지만 가져와서 count
  // 끝 시간까지 1초 단위로 매초 count
  // 제일 많이 count 되어진 수 return
  
  lines.forEach(line => {
      const splitData = line.split(' ');
      const startDate = new Date(`${splitData[0]} ${splitData[1]}`);
      
      const endDate = new Date(startDate.valueOf() + parseFloat(splitData[2].slice(0, splitData[2].length-1)) * 1000);
      
      console.log(startDate.valueOf());
      console.log(parseFloat(splitData[2].slice(0, splitData[2].length-1)) * 1000);
      console.log(endDate.toString());
      // console.log(new Date(`${splitData[0]} ${splitData[1]}`))
  })
  
  
  return answer;
}