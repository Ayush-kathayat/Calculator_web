"use strict";



export default function remove_spaces(str_1) {
    let str_2 = "";
    for (let i = 0; i < str_1.length; i++) {
      if (str_1[i] === " ") {
        continue;
      }
      str_2 += str_1[i];
    }
  
    return str_2;
  }