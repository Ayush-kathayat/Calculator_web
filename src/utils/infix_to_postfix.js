"use strict";


function set_precendence(prec) {
  switch (prec) {
    case "+":
      return 2;

    case "-":
      return 2;

    case "*":
      return 3;

    case "/":
      return 4;

    case "^":
      return 4;

    case "(":
      return 0;

    default:
      return -1;
  }
}



export default function infix_to_postfix(infix) {
  
  let str = [];
  let stack = [];

  for (let i = 0; i < infix.length; i++) {
    if (
      (infix.charCodeAt(i) >= 48 && infix.charCodeAt(i) <= 57) ||
      infix.charCodeAt(i) === 46
    ) {
      // it will show the operands only
      str.push(infix[i]);
    }

    if (infix[i] === "(") {
      stack.push(infix[i]); // if you encounter the ( opening bracket just push in to the stack
    }

    if (infix[i] === ")") {
      // remove all the operand from the stack till the opening bracket
      while (true) {
        if (stack[stack.length - 1] === "(") {
          stack.pop(); // at last pop the opening bracket from the stack
          break;
        }
        str.push(stack[stack.length - 1]);
        stack.pop();
      }
    }

    //     // // now we will here enter the operand according to there precendence and all

    if (
      infix[i] === "+" ||
      infix[i] === "-" ||
      infix[i] === "*" ||
      infix[i] === "/" ||
      infix[i] === "^"
    ) {
      if (stack.length === 0) {
        // first when stack is just push
        stack.push(infix[i]);
      } else if (
        set_precendence(infix[i]) <= set_precendence(stack[stack.length - 1])
      ) {
        while (!(stack.length === 0)) {
          // it will pop till the
          str.push(stack[stack.length - 1]);
          stack.pop();
          if (stack.length === 0) {
            // double safety
            break;
          } else if (
            set_precendence(infix[i]) > set_precendence(stack[stack.length - 1])
          ) {
            break;
          }
        }

        stack.push(infix[i]);
      } else {
        stack.push(infix[i]); // just push
      }
    }
  }

  while (!(stack.length === 0)) {
    str.push(stack[stack.length - 1]);
    stack.pop();
  }

  let postfix = "";

  for (let i = 0; i < str.length; i++) {
    postfix += str[i];
  }

  return postfix;
}
