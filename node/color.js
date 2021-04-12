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
log(color.black('hello in black'));
log(color.red('hello in red'));
log(color.green('hello in green'));
log(color.yellow('hello in yellow'));
log(color.blue('hello in blue'));
log(color.magenta('hello in magenta'));
log(color.cyan('hello in cyan'));
log(color.white('hello in white'));
