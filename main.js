("use strict");

import "./style.css";
import { is_focused, backspace, solvePostfix } from "./src/utils";

import { display } from "./src/components";

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
  b_bracs,
} from "./src/components/buttons";

import { focus_on_keydown } from "./src/features";

import { triggerHoverFromTouch } from "./src/features/trigger_hover_from_touch";
