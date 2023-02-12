
"use strict";

import { display } from "./display";

const b_brac1 = document.querySelector(".b_brac1");

b_brac1.addEventListener("click", (event) => {
  display.value = display.value + b_brac1.value;
});

const b_brac2 = document.querySelector(".b_brac2");

b_brac2.addEventListener("click", (event) => {
  display.value = display.value + b_brac2.value;
});

const b_div = document.querySelector(".b_div");

b_div.addEventListener("click", (event) => {
  display.value = display.value + b_div.value;
});

const b_7 = document.querySelector(".b_7");

b_7.addEventListener("click", (event) => {
  display.value = display.value + b_7.value;
});

const b_8 = document.querySelector(".b_8");

b_8.addEventListener("click", (event) => {
  display.value = display.value + b_8.value;
});

const b_9 = document.querySelector(".b_9");

b_9.addEventListener("click", (event) => {
  display.value = display.value + b_9.value;
});

const b_multi = document.querySelector(".b_multi");

b_multi.addEventListener("click", (event) => {
  display.value = display.value + b_multi.value;
});

const b_4 = document.querySelector(".b_4");

b_4.addEventListener("click", (event) => {
  display.value = display.value + b_4.value;
});

const b_5 = document.querySelector(".b_5");

b_5.addEventListener("click", (event) => {
  display.value = display.value + b_5.value;
});

const b_6 = document.querySelector(".b_6");

b_6.addEventListener("click", (event) => {
  display.value = display.value + b_6.value;
});

const b_sub = document.querySelector(".b_sub");

b_sub.addEventListener("click", (event) => {
  display.value = display.value + b_sub.value;
});

const b_1 = document.querySelector(".b_1");

b_1.addEventListener("click", (event) => {
  display.value = display.value + b_1.value;
});

const b_2 = document.querySelector(".b_2");

b_2.addEventListener("click", (event) => {
  display.value = display.value + b_2.value;
});

const b_3 = document.querySelector(".b_3");

b_3.addEventListener("click", (event) => {
  display.value = display.value + b_3.value;
});

const b_add = document.querySelector(".b_add");

b_add.addEventListener("click", (event) => {
  display.value = display.value + b_add.value;
});

const b_pow = document.querySelector(".b_pow");

b_pow.addEventListener("click", (event) => {
  display.value = display.value + b_pow.value;
});

const b_0 = document.querySelector(".b_0");

b_0.addEventListener("click", (event) => {
  display.value = display.value + b_0.value;
});

const b_dot = document.querySelector(".b_dot");

b_dot.addEventListener("click", (event) => {
  display.value = display.value + b_dot.value;
});

const b_ans = document.querySelector(".b_ans");

b_ans.addEventListener("click", (event) => {

  postfix_evaluation();
  
});


export {
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
    b_brac1
};