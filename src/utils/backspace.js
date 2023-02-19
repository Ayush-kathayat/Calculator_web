"use strict";

import display from "../components/display";

export default function backspace() {
  let input_lol = display.value;
  let size = input_lol.length;
  input_lol = input_lol.slice(0, size - 1);
  display.value = input_lol;
}
