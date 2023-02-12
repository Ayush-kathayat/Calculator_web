

export function Postfix_Evaluation(posfix) {
  let stack = [""];
  //   let infix = remove_spaces(display.value);
  //   let postfix = infix_to_postfix(infix);
  //   let str_vector = Handling_digits_floats(infix); // our vector with digits and double values

  let cnt = 0;
  for (let i = 0; i < postfix.length; ) {
    if (postfix.charCodeAt(i) >= 48 && postfix.charCodeAt(i) <= 57) {
      i = i + str_vector[cnt].length;
      stack.push(str_vector[cnt++]); // just push
      // std::cout << str_vector[cnt++] << std::endl;
    } else {
      // std::cout << postfix[i] << std::endl;

      let a, b, c;
      switch (postfix[i]) {
        case "+":
          b = stack[stack.length - 1];
          stack.pop();

          a = stack[stack.length - 1];

          stack.pop();
          c = Number(a) + Number(b);

          stack.push(c);
          // std::cout << "its plus" << std::endl;
          break;

        case "-":
          b = stack[stack.length - 1];
          stack.pop();
          a = stack[stack.length - 1];
          stack.pop();
          c = Number(a) - Number(b);
          stack.push(c);
          // std::cout << "its sub" << std::endl;
          break;

        case "*":
          b = stack[stack.length - 1];
          stack.pop();
          a = stack[stack.length - 1];
          stack.pop();
          c = Number(a) * Number(b);
          stack.push(c);
          // std::cout << "its multi" << std::endl;
          break;

        case "/":
          b = stack[stack.length - 1];
          stack.pop();
          if (b === 0) {
            console.log("Can't divide by zero ");
            return 0;
          }
          a = stack[stack.length - 1];
          stack.pop();
          c = Number(a) / Number(b);
          stack.push(c);
          // std::cout << "its divide" << std::endl;
          break;

        case "^":
          b = stack[stack.length - 1];
          stack.pop();
          a = stack[stack.length - 1];
          stack.pop();
          c = Math.pow(Number(a), Number(b));
          stack.push(c);
          break;
      }

      i++;
    }
  }

  let ans = stack[stack.length - 1]; // i am just giving the string as an output

  document.getElementById("displayid").value = ans;
}
