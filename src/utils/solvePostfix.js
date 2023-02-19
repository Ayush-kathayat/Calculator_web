"use strict";


export default function solvePostfix(postfix , infix_array) {

  // our vector with digits and double values
  var stack = [];
  

  let cnt = 0 ;
  for(let i = 0 ; i < postfix.length; )
  {
      if(postfix.charCodeAt(i) >= 48 && postfix.charCodeAt(i)  <= 57 )
      { 
        const strLength = (infix_array[cnt] || '').length;

          i = i + strLength;
          stack.push(infix_array[cnt++]);                  
      }
      else
      {
      
          
          var a , b , c;
          switch(postfix[i])
          {
              case '+':
              b = (stack[stack.length - 1]);
              stack.pop();
            
              a = (stack[stack.length - 1]);
           
              stack.pop();
              c = Number(a) + Number(b);
              
              stack.push(c);
          
              break;
              
              case '-':
              b = (stack[stack.length - 1]);
              stack.pop();
              a = (stack[stack.length - 1]);
              stack.pop();
              c = Number(a) - Number(b);
              stack.push(c);
             
              break;
              
              
              case '*':
              b = (stack[stack.length - 1]);
              stack.pop();
              a = (stack[stack.length - 1]);
              stack.pop();
              c = Number(a) * Number(b);
              stack.push(c);
            
              break;
              
              
              case '/':
              b = (stack[stack.length - 1]);
              stack.pop();
              if(b === 0 )
              {
                  console.log("Can't divide by zero ");
                  return 0;
              }
              a = (stack[stack.length - 1]);
              stack.pop();
              c = Number(a) / Number(b);
              stack.push(c);
             
              break;
              
              
              case '^':
              b = (stack[stack.length - 1]);
              stack.pop();
              a = (stack[stack.length - 1]);
              stack.pop();
              c = Math.pow(Number(a) , Number(b));
              stack.push(c);
              break;
              
              
          };
          
          i++;
         
      }
  }
  
  return stack[stack.length - 1]; // i am just giving the string as an output

}
