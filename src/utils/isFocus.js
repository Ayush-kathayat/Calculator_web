"use strict";

export default function is_focused(element) {
  return document.activeElement === element; // true if input is focused and false otherwise
}
