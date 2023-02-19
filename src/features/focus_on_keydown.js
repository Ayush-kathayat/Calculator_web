"use strict";
import { display } from "../components";

import { is_focused } from "../utils";
import calculate from "../utils/calculate";




const isOperator = (key) => {
  return (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === " " ||
    key === "."
  )
};

const isDigit = (key) => {
  return (
    key.charCodeAt(0) >= "0".charCodeAt(0) && key.charCodeAt(0) <= "9".charCodeAt(0)
  );
};

window.onkeydown = (event) => {
  function isValidKey(key) {
    // true only if number or alphabet or operator or space or dot or backspace or enter
    return (
      isDigit(key) || isOperator(key) || key === "Backspace" || key === "Enter"
    );
  }


  // const buttons = document.querySelectorAll(".butt");

  

  if(isValidKey(event.key)) {

    const butto = event.key;

    // alert(butto);

    switch (butto) {

      case "0":  
      const butt_0 = document.querySelector(".b_0");
      butt_0.classList.add('hover-class');
      break;


      case "1": 
      const butt_1 = document.querySelector(".b_1");
      butt_1.classList.add('hover-class');
      break;

      case "2": 
      const butt_2 = document.querySelector(".b_2");
      butt_2.classList.add('hover-class');
      break;

      case "3": 
      const butt_3 = document.querySelector(".b_3");
      butt_3.classList.add('hover-class');
      break;

      case "4":       
      const butt_4 = document.querySelector(".b_4");
      butt_4.classList.add('hover-class');
      break;

      case "5": 
      const butt_5 = document.querySelector(".b_5");
      butt_5.classList.add('hover-class');
      break;

      case "6": 
      const butt_6 = document.querySelector(".b_6");
      butt_6.classList.add('hover-class');
      break;

      case "7": 
      const butt_7 = document.querySelector(".b_7");
      butt_7.classList.add('hover-class');
      break;

      case "8": 
      const butt_8 = document.querySelector(".b_8");
      butt_8.classList.add('hover-class');
      break;

      case "9": 
      const butt_9 = document.querySelector(".b_9");
      butt_9.classList.add('hover-class');
      break;

      case "+": 
      const butt_add = document.querySelector(".b_add");
      butt_add.classList.add('hover-class');
      break;

      case "-": 
      const butt_sub = document.querySelector(".b_sub");
      butt_sub.classList.add('hover-class');
      break;

      case "*": 
      const butt_multi = document.querySelector(".b_multi");
      butt_multi.classList.add('hover-class');
      break;

      case "/": 
      const butt_div = document.querySelector(".b_div");
      butt_div.classList.add('hover-class');
      break;

      case ".": 
      const butt_dot = document.querySelector(".b_dot");
      butt_dot.classList.add('hover-class');
      break;

      case "Backspace": 
      const butt_del = document.querySelector(".backspace");
      butt_del.classList.add('backspace_hover');
      break;

      case "Enter": 
      const butt_ans = document.querySelector(".b_ans");
      butt_ans.classList.add('hover-class');
      break;

      default: break;
    };
  }

  if (event.key === "Enter") {
    calculate();
  }


  if (!isValidKey(event.key)) {
    return;
  }

  if (is_focused(display) ) {
    
    return;
   
  } 
  else 
  {
    display.focus();
  }
  
};


window.onkeyup = (event) => {


  const buttos = event.key;

  // alert(butto);

  switch (buttos) {

    case "0":  
    const btt_0 = document.querySelector(".b_0");
    btt_0.classList.remove('hover-class');
    break;
  
    case "1": 
    const btt_1 = document.querySelector(".b_1");
    btt_1.classList.remove('hover-class');
    break;

    case "2": 
    const btt_2 = document.querySelector(".b_2");
    btt_2.classList.remove('hover-class');

    case "3": 
    const btt_3 = document.querySelector(".b_3");
    btt_3.classList.remove('hover-class');
    break;

    case "4":       
    const btt_4 = document.querySelector(".b_4");
    btt_4.classList.remove('hover-class');
    break;

    case "5": 
    const btt_5 = document.querySelector(".b_5");
    btt_5.classList.remove('hover-class');
    break;

    case "6": 
    const btt_6 = document.querySelector(".b_6");
    btt_6.classList.remove('hover-class');
    break;

    case "7": 
    const btt_7 = document.querySelector(".b_7");
    btt_7.classList.remove('hover-class');
    break;

    case "8": 
    const btt_8 = document.querySelector(".b_8");
    btt_8.classList.remove('hover-class');

    case "9": 
    const btt_9 = document.querySelector(".b_9");
    btt_9.classList.remove('hover-class');
    break;

    case "+": 
    const btt_add = document.querySelector(".b_add");
    btt_add.classList.remove('hover-class');
    break;

    case "-": 
    const btt_sub = document.querySelector(".b_sub");
    btt_sub.classList.remove('hover-class');
    break;

    case "*": 
    const btt_multi = document.querySelector(".b_multi");
    btt_multi.classList.remove('hover-class');
    break;

    case "/": 
    const btt_div = document.querySelector(".b_div");
    btt_div.classList.add('hover-class');
    break;

    case ".": 
    const btt_dot = document.querySelector(".b_dot");
    btt_dot.classList.remove('hover-class');
    break;

    case "Backspace": 
    const btt_del = document.querySelector(".backspace");
    btt_del.classList.remove('backspace_hover');
    break;

    case "Enter": 
    const btt_ans = document.querySelector(".b_ans");
    btt_ans.classList.remove('hover-class');
    break;


    default: break;
  };
};

const focus_on_keydown = true;

export default focus_on_keydown;
