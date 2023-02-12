import './style.css'
"use strict";
const root = document.getElementById("root");



import { display } from "./src/components/display";

import {
  b_dot,
  b_pow,
  b_add,
  b_sub,
  b_multi,
  b_0,
  b_3,
  b_2,
  b_1,
  b_6,
  b_5,
  b_4,
  b_9,
  b_8,
  b_7,
  b_div,
  b_brac2,
  b_brac1,
} from "./src/components/buttons";


import { is_focused } from './src/utils/isFocus';

window.addEventListener("keydown", (event) => {


  if (is_focused(display)) {
    return;
  }

  if (event.code[0] === "D") {
    // if isNumeric
    display.value = display.value + event.key;
    return;
  }
  if (event.code === "Backspace") {
    Del();
    return;
  }
  if (event.code === "Enter") {
    Postfix_Evaluation();
    return;
  }
});




