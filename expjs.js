// import some packages 
const path = require('path');
const fs = require('fs').promises;
const process = require('process');
const exec = require('child_process').exec;

// init some color text here
const font_black = "\x1b[30m"
const font_red = "\x1b[31m"
const font_green = "\x1b[32m"
const font_yellow = "\x1b[33m"
const font_blue = "\x1b[34m"
const font_magenta = "\x1b[35m"
const font_cyan = "\x1b[36m"
const font_white = "\x1b[37m"

// make project directory function
async function makeDir(name_folder) {
    let newDir;

    newDir = await fs.mkdir(process.cwd() + '/' + name_folder);
}

// make changedir function
async function giveCMD(my_cmd) {
    let dirGoal;

    dirGoal = await exec(my_cmd);
}

// make copyfile function
async function copyFile(src_path, dest_path) {
    let file_copy;

    file_copy = await fs.copyFile(src_path, dest_path);
}

// clear screen
console.log('\033c');

// simple logo for cli tool
console.log(`${font_cyan}  _______  ${font_green}____      ____  ${font_magenta}______     ${font_yellow}      _____      ______     `);
console.log(`${font_cyan} |  _____| ${font_green}\\   \\    /   / ${font_magenta}|  ___ )  ${font_yellow}       |__   |    |      |  `);
console.log(`${font_cyan} | |_____  ${font_green} \\   \\  /   /  ${font_magenta}| |__| )  ${font_yellow}          |  |    |   ___|  `);
console.log(`${font_cyan} |  _____|  ${font_green} \\   \\/   /   ${font_magenta}|  ____)  ${font_yellow}          |  |  _(___   )   `);
console.log(`${font_cyan} | |_____   ${font_green} /   /\\   \\   ${font_magenta}|  |      ${font_yellow}   |\\_____|  | |       |   `);
console.log(`${font_cyan} |_______|  ${font_green}/___/  \\___\\  ${font_magenta}|__|      ${font_yellow}   |_________| |_______|    `);
console.log('\n');

console.log(`Create and init project -> ${font_cyan + process.argv[2]}`);

// create new directory
makeDir(process.argv[2]);

if(process.argv[3] == 'ejs') {
    copyFile(__dirname + '/templates/app-ejs/app.js', process.cwd() + '/' + process.argv[2].toString() + '/app.js');

    // change directory location
    process.chdir(process.argv[2].toString())

    giveCMD('npm init -y');
}