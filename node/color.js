'use strict';
const log = console.log;
/*
  returns string prefixed with ANSI color escape code 
  colorize.red('hello')
 */
const colorize = () => {
  let reset = '\u001b[39m';
  return {
    black: (text) => '\u001b[30m' + text + reset,
    red: (text) => '\u001b[31m' + text + reset,
    green: (text) => '\u001b[32m' + text + reset,
    yellow: (text) => '\u001b[33m' + text + reset,
    blue: (text) => '\u001b[34m' + text + reset,
    magenta: (text) => '\u001b[35m' + text + reset,
    cyan: (text) => '\u001b[36m' + text + reset,
    white: (text) => '\u001b[37m' + text + reset,
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

log(
  color.red('red fish') +
    ' ' +
    color.cyan('cyan fish') +
    ' ' +
    color.magenta('magenta fish')
);
