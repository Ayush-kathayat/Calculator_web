// function is_signed_digit(infix) {
//   if (infix[0] === "-") {
//     return true;
//   }
//   return false;
// }

function Handling_digits_floats(infix) {
  let arr = [];

  let temp = "";
  let init = false;

  for (let i = 0; i < infix.length; ) {
    if (infix.charCodeAt(i) >= 48 && infix.charCodeAt(i) <= 57) {
      temp += infix[i];
    } else if (infix[i] === ".") {
      init = true;
      temp += infix[i];
    } else {
      if (infix[i] === "(" || infix[i] === ")") {
        i++;
        continue;
      }

      if (init) {
        arr.push(temp);
        temp = temp.slice(0, 0);
      } else {
        arr.push(temp);
        temp = temp.slice(0, 0);
      }

      init = false;
    }

    if (i === infix.length - 1) {
      // std::cout << temp << std::endl;
      arr.push(temp);
      temp = temp.slice(0, 0);
    }

    i++;
  }
  return arr;
}
