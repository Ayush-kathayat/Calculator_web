import { MAX_INPUT_LENGTH } from "../constants";

const display = document.getElementById("displayid");

display.addEventListener("input", (event) => {
  let flag = false;
  if (display.value.length > MAX_INPUT_LENGTH) {
    display.value = display.value.slice(0, MAX_INPUT_LENGTH);
    alert(`Max ${MAX_INPUT_LENGTH} characters allowed`);
    flag = true;
  }

  if (flag) {
    const btt_0 = document.querySelector(".b_0");
    btt_0.classList.remove("hover-class");

    const btt_1 = document.querySelector(".b_1");
    btt_1.classList.remove("hover-class");

    const btt_2 = document.querySelector(".b_2");
    btt_2.classList.remove("hover-class");

    const btt_3 = document.querySelector(".b_3");
    btt_3.classList.remove("hover-class");

    const btt_4 = document.querySelector(".b_4");
    btt_4.classList.remove("hover-class");

    const btt_5 = document.querySelector(".b_5");
    btt_5.classList.remove("hover-class");

    const btt_6 = document.querySelector(".b_6");
    btt_6.classList.remove("hover-class");

    const btt_7 = document.querySelector(".b_7");
    btt_7.classList.remove("hover-class");

    const btt_8 = document.querySelector(".b_8");
    btt_8.classList.remove("hover-class");

    const btt_9 = document.querySelector(".b_9");
    btt_9.classList.remove("hover-class");

    const btt_add = document.querySelector(".b_add");
    btt_add.classList.remove("hover-class");
    
    const btt_sub = document.querySelector(".b_sub");
    btt_sub.classList.remove("hover-class");
    
    const btt_multi = document.querySelector(".b_multi");
    btt_multi.classList.remove("hover-class");
    
    const btt_dot = document.querySelector(".b_dot");
    btt_dot.classList.remove("hover-class");
    
    const btt_del = document.querySelector(".backspace");
    btt_del.classList.remove("backspace_hover");
    
    const btt_ans = document.querySelector(".b_ans");
    btt_ans.classList.remove("hover-class");
    
  }
});

export default display;
