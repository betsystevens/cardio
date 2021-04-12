'use strict';
const log = console.log;
/*
  returns string prefixed with ANSI color escape code 
  colorize.red('hello')
 */
const colorize = () => {
  let reset = '\u001b[39m';
  let ESC = '\u001b[';
  return {
    black: (text) => `${ESC}30m` + text + reset,
    red: (text) => `${ESC}31m` + text + reset,
    green: (text) => `${ESC}32m` + text + reset,
    yellow: (text) => `${ESC}33m` + text + reset,
    blue: (text) => `${ESC}34m` + text + reset,
    magenta: (text) => `${ESC}35m` + text + reset,
    cyan: (text) => `${ESC}36m` + text + reset,
    white: (text) => `${ESC}37m` + text + reset,
    set: (code, text) => `${ESC}${code}m` + text + reset,
  };
};

let color = colorize();
let text = 'some really cool text string';
log(color.black(text));
log(color.red(text));
log(color.green(text));
log(color.yellow(text));
log(color.blue(text));
log(color.magenta(text));
log(color.cyan(text));
log(color.white(text));

log();
let words = [
  'one',
  'fish',
  'two',
  'fish',
  'red',
  'fish',
  'blue',
  'fish',
  'black',
  'fish',
  'blue',
  'fish',
  'old',
  'fish',
  'new',
  'fish',
];

// use high intensity colors 90-97
for (let i = 0; i < 8; i++) {
  let j = 2 * i;
  log(
    color.set(30 + i, words[2 * i]) + ' ' + color.set(90 + i, words[2 * i + 1])
  );
}
