// https://programmers.co.kr/learn/courses/30/lessons/42888#

function solution(record) {
  var answer = [];
  const userList = record.reduce((accu, value) => {
      const userInfo = value.split(' ');
      
      accu[userInfo[1]] = userInfo[2]? userInfo[2]: accu[userInfo[1]];
      
      return accu;
  }, {})
  
  answer = record.reduce((accu, value) => {
      const userInfo = value.split(' ');
      let comment = '';
      
      if(userInfo[0] === 'Enter') {
          comment = `${userList[userInfo[1]]}님이 들어왔습니다.`
          accu.push(comment)
      } else if(userInfo[0] === 'Leave') {
          comment = `${userList[userInfo[1]]}님이 나갔습니다.`
          accu.push(comment)
      }
      return accu;
  }, [])
  
  return answer;
}