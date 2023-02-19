"use strict";


// the work of this function is to convert infix string into infix array so it can help in double digits , negative numbers and floats
export default function handling_digits_floats(infix) {

  let infix_array = [];

  let temp = "";

  var init_1 = false;

  for(let i = 0 ; i < infix.length ; )
  {

    // if(infix[i] === "-")
    // {
    //   // if((i === 0) || (infix[i+1] === "("))   //  this is the case one and hard one
    //   // { 

    //   // }

    //   if(infix[i-1] === "(" )  //  this is the case two
    //   {
    //     temp += infix[i];
    //     init_2 = true;

    //   }

    // }
    if(infix.charCodeAt(i) >= 48 && infix.charCodeAt(i) <= 57)
    {
      temp += infix[i];
     
    }
    else if(infix[i] === ".")
    {
      temp += infix[i];
      init_1 = true;

    }
    else
        {
            if (infix[i] === '('  )
            {
                i++;
                continue;
            }
            
            if( infix[i] === ')' )
            {
                infix_array.push(temp);
                i++;
                continue;
            }
            
            if(init_1 )
            {

                infix_array.push(temp);
                temp = temp.slice(0,0);
               
            }
            else
            {

                infix_array.push(temp);
                temp = temp.slice(0,0);
            }
        
            
            init_1 = false;
            
        }
        
        if(i === infix.length-1)
        {
            infix_array.push(temp);
        
        }
        
        i++;
    }
    
    
    return infix_array;

  }

