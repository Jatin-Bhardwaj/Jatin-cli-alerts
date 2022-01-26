/**
 * Jatin CLI Alerts
 * 
 * Cross platform CLI Alerts with colors
 * Workds on macOS , Linux and Windows
 * Alerts : `success` , `info`, `warning` , `error`
 * @author Jatin Bhardwaj <>
 */   

const chalk = require('chalk');
const sym   = require('log-symbols');

// Colors
const green   = chalk.green;
const greenI  = chalk.green.inverse;
const red     = chalk.red;
const redI    = chalk.red.bold.inverse;
const orange  = chalk.keyword('orange');
const orangeI = chalk.keyword('orange').inverse;
const blue    = chalk.blue ;
const blueI   = chalk.blue.inverse;


function options(options){
   const defaultOptions = {
       type : `error`,
       msg  : `You forget to define all options`,
       name : ``
   };
   const opts = {...defaultOptions,...options};
   const {type,msg,name} = opts;

   const printName = name?name:type.toUpperCase();

   if(type=== `success`){
       console.log(`\n ${sym.success} ${greenI(` ${printName} `)} ${green(msg)} \n`);
   }
   if(type=== `warning`){
        console.log(`\n ${sym.success} ${orangeI(` ${printName} `)} ${orange(msg)} \n`);
   }
   if(type=== `info`){
         console.log(`\n ${sym.success} ${blueI(` ${printName} `)} ${blue(msg)} \n`);
   }
   if(type===`error`){
         console.log(`\n ${sym.error} ${redI( ` ${printName} `)} ${red(msg)}\n`);
   }
   
};

module.exports = {
    options,
}