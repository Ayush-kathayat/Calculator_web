import { display } from "../components";

import { remove_spaces, infix_to_postfix, solvePostfix } from "../utils";

import handling_digits_floats from "./handling_digit.js";

export default function calculate() {
  const input_str = display.value;
  console.log(input_str);



  const input_str_without_spaces = remove_spaces(input_str);
  console.log(input_str_without_spaces);



  const infix_array = handling_digits_floats(input_str_without_spaces);
  // console.log({infix_array});
  // for (let i = 0; i < infix_array.length; i++) 
  // {
  //   console.log(infix_array[i]);
  // }


  const postfix = infix_to_postfix(input_str_without_spaces);
  console.log(postfix);


  const result = solvePostfix(postfix , infix_array);
  console.log(result);
  display.value = result.toFixed(2);

  
}


