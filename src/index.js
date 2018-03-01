module.exports = function check(str, bracketsConfig) {
  var bracketsObj = {};    

  for(var i = 0, len = bracketsConfig.length; i < len; i++){
      bracketsObj[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  function parseStr(string){
      var stackOfbrackets = [];
      var i = 0;
      var j = 0;

      if(!(string.charAt(0) in bracketsObj))
          return false;   
     
      while(i < string.length){
          if(stackOfbrackets.length == 0){
              stackOfbrackets.push(string.charAt(i)); 
              i++;  
              j++; 
          }            
          if(validateBrackets(stackOfbrackets[j-1], string.charAt(i))){
              stackOfbrackets.pop();
              i++;
              j--;
          }
          else{
              stackOfbrackets.push(string.charAt(i));
              i++;
              j++;
          }            
      }
      return stackOfbrackets.length == 0 ? true : false;
  }
  
  function validateBrackets(bracketOpen, bracketClosed){
      if(bracketOpen in bracketsObj){
          return bracketsObj[bracketOpen] === bracketClosed;
      }
      else
          return false;
  }
  
  return parseStr(str);    
}

