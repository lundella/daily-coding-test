function solution(s, n) {
  let answer = '';    
  const stringArray = s.split('');
  
  const charCodeArray = stringArray.map(char => {
      let result = char;
      let charCode = 0;
      let caseScope = 0;
      
      if(char.match(/[A-Z]/)) {
          caseScope = 64;
      } else if(char.match(/[a-z]/)) {
          caseScope = 96;
      }
      
      if(caseScope) {
          charCode = char.charCodeAt() - caseScope;
          charCode += n;
          
          if(26 < charCode) {
              charCode -= 26;
          }

          charCode += caseScope;
          result = String.fromCharCode(charCode);
      }
      return result;
  })
  
  answer = charCodeArray.join('');
  return answer;
}