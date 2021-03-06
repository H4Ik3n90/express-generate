// import some packages 
const path = require('path');
const fs = require('fs').promises;
const { exec } = require('child_process');
const process = require('process');

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

// make readfile function
async function replaceCode() {
    let read_file;
    let write_file;

    read_file = await fs.readFile(process.cwd() + '/package.json', 'utf-8');

    let read_file_replace1 = read_file.replace(/test/, 'serve');
    let read_file_replace2 = read_file_replace1.replace(/echo \\"Error: no test specified\\" && exit 1/, 'nodemon ./app.js');

    write_file = await fs.writeFile(process.cwd() + '/package.json', read_file_replace2);
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

if(process.argv[3] == 'ejs') {
    console.log(`Create and init project -> ${font_cyan + process.argv[2]}`);

    // create new directory
    makeDir(process.argv[2]);

    // change directory location
    process.chdir(process.cwd() + '/' + process.argv[2].toString())

    // activity log
    console.log(`${font_yellow}Make directory inside project -> ${font_cyan + process.argv[2]}`);

    // make some dir in project folder
    makeDir('views');
    makeDir('public');
    makeDir('public/images');
    makeDir('public/scripts');
    makeDir('public/style');
    makeDir('routes');

    // activity log
    console.log(`${font_yellow}Copy file inside project -> ${font_cyan + process.argv[2]}`);

    // copy some template files 
    copyFile(__dirname + '/templates/app-ejs/app.js', process.cwd() + '/app.js');
    copyFile(__dirname + '/templates/views-ejs/index.ejs', process.cwd() + '/views/index.ejs');
    copyFile(__dirname + '/templates/routes/UserRoute.js', process.cwd() + '/routes/UserRoute.js');
    copyFile(__dirname + '/templates/public/images/Icon.svg', process.cwd() + '/public/images/Icon.svg');
    copyFile(__dirname + '/templates/public/scripts/index.js', process.cwd() + '/public/scripts/index.js');
    copyFile(__dirname + '/templates/public/style/style.css', process.cwd() + '/public/style/style.css');

    // activity log
    console.log(`${font_yellow}Init json file inside project -> ${font_cyan + process.argv[2]}`);

    // init package.json
    giveCMD('npm init -y');

    // some command for npm
    setTimeout(replaceCode, 3500);

    // activity log
    console.log(`${font_yellow}Install some dependencies -> ${font_cyan + process.argv[2]}`);

    // install some dependencies
    function installDep() {
        exec('npm i express ejs --save', (err) => {
            if(err) {
                console.log(`${font_red}There's something wrong here`);
            }else {
                console.log(`${font_yellow}Install dependencies complete -> ${font_cyan + process.argv[2]}`);
            }
        });
    }

    setTimeout(installDep, 3500);

}else if(process.argv[3] == 'pug') {
    console.log(`Create and init project -> ${font_cyan + process.argv[2]}`);

    // create new directory
    makeDir(process.argv[2]);

    // change directory location
    process.chdir(process.cwd() + '/' + process.argv[2].toString())

    // activity log
    console.log(`${font_yellow}Make directory inside project -> ${font_cyan + process.argv[2]}`);

    // make some dir in project folder
    makeDir('views');
    makeDir('public');
    makeDir('public/images');
    makeDir('public/scripts');
    makeDir('public/style');
    makeDir('routes');

    // activity log
    console.log(`${font_yellow}Copy file inside project -> ${font_cyan + process.argv[2]}`);

    // copy some template files 
    copyFile(__dirname + '/templates/app-pug/app.js', process.cwd() + '/app.js');
    copyFile(__dirname + '/templates/views-pug/index.pug', process.cwd() + '/views/index.pug');
    copyFile(__dirname + '/templates/routes/UserRoute.js', process.cwd() + '/routes/UserRoute.js');
    copyFile(__dirname + '/templates/public/images/Icon.svg', process.cwd() + '/public/images/Icon.svg');
    copyFile(__dirname + '/templates/public/scripts/index.js', process.cwd() + '/public/scripts/index.js');
    copyFile(__dirname + '/templates/public/style/style.css', process.cwd() + '/public/style/style.css');

    // activity log
    console.log(`${font_yellow}Init json file inside project -> ${font_cyan + process.argv[2]}`);

    // init package.json
    giveCMD('npm init -y');

    // some command for npm
    setTimeout(replaceCode, 3500);

    // activity log
    console.log(`${font_yellow}Install some dependencies -> ${font_cyan + process.argv[2]}`);

    // install some dependencies
    function installDep() {
        exec('npm i express pug --save', (err) => {
            if(err) {
                console.log(`${font_red}There's something wrong here`);
            }else {
                console.log(`${font_yellow}Install dependencies complete -> ${font_cyan + process.argv[2]}`);
            }
        });
    }

    setTimeout(installDep, 3500);
    
}else if(process.argv[3] == 'html') {
    console.log(`Create and init project -> ${font_cyan + process.argv[2]}`);

    // create new directory
    makeDir(process.argv[2]);

    // change directory location
    process.chdir(process.cwd() + '/' + process.argv[2].toString())

    // activity log
    console.log(`${font_yellow}Make directory inside project -> ${font_cyan + process.argv[2]}`);

    // make some dir in project folder
    makeDir('views');
    makeDir('public');
    makeDir('public/images');
    makeDir('public/scripts');
    makeDir('public/style');
    makeDir('routes');

    // activity log
    console.log(`${font_yellow}Copy file inside project -> ${font_cyan + process.argv[2]}`);

    // copy some template files 
    copyFile(__dirname + '/templates/app-html/app.js', process.cwd() + '/app.js');
    copyFile(__dirname + '/templates/views-html/index.html', process.cwd() + '/views/index.html');
    copyFile(__dirname + '/templates/routes-html/UserRoute.js', process.cwd() + '/routes/UserRoute.js');
    copyFile(__dirname + '/templates/public/images/Icon.svg', process.cwd() + '/public/images/Icon.svg');
    copyFile(__dirname + '/templates/public/scripts/index.js', process.cwd() + '/public/scripts/index.js');
    copyFile(__dirname + '/templates/public/style/style.css', process.cwd() + '/public/style/style.css');

    // activity log
    console.log(`${font_yellow}Init json file inside project -> ${font_cyan + process.argv[2]}`);

    // init package.json
    giveCMD('npm init -y');

    // some command for npm
    setTimeout(replaceCode, 3500);

    // activity log
    console.log(`${font_yellow}Install some dependencies -> ${font_cyan + process.argv[2]}`);

    // install some dependencies
    function installDep() {
        exec('npm i express --save', (err) => {
            if(err) {
                console.log(`${font_red}There's something wrong here`);
            }else {
                console.log(`${font_yellow}Install dependencies complete -> ${font_cyan + process.argv[2]}`);
            }
        });
    }

    setTimeout(installDep, 3500);
    
}else if(process.argv[3] == 'ejs-layouts') {
    console.log(`Create and init project -> ${font_cyan + process.argv[2]}`);

    // create new directory
    makeDir(process.argv[2]);

    // change directory location
    process.chdir(process.cwd() + '/' + process.argv[2].toString())

    // activity log
    console.log(`${font_yellow}Make directory inside project -> ${font_cyan + process.argv[2]}`);

    // make some dir in project folder
    makeDir('views');
    makeDir('views/layouts');
    makeDir('public');
    makeDir('public/images');
    makeDir('public/scripts');
    makeDir('public/style');
    makeDir('routes');

    // activity log
    console.log(`${font_yellow}Copy file inside project -> ${font_cyan + process.argv[2]}`);

    // copy some template files 
    copyFile(__dirname + '/templates/app-ejs-layouts/app.js', process.cwd() + '/app.js');
    copyFile(__dirname + '/templates/views-ejs-layouts/layouts/index.ejs', process.cwd() + '/views/layouts/index.ejs');
    copyFile(__dirname + '/templates/views-ejs-layouts/home.ejs', process.cwd() + '/views/home.ejs');
    copyFile(__dirname + '/templates/routes-ejs-layouts/UserRoute.js', process.cwd() + '/routes/UserRoute.js');
    copyFile(__dirname + '/templates/public/images/Icon.svg', process.cwd() + '/public/images/Icon.svg');
    copyFile(__dirname + '/templates/public/scripts/index.js', process.cwd() + '/public/scripts/index.js');
    copyFile(__dirname + '/templates/public/style/style.css', process.cwd() + '/public/style/style.css');

    // activity log
    console.log(`${font_yellow}Init json file inside project -> ${font_cyan + process.argv[2]}`);

    // init package.json
    giveCMD('npm init -y');

    // some command for npm
    setTimeout(replaceCode, 3500);

    // activity log
    console.log(`${font_yellow}Install some dependencies -> ${font_cyan + process.argv[2]}`);

    // install some dependencies
    function installDep() {
        exec('npm i express ejs express-ejs-layouts --save', (err) => {
            if(err) {
                console.log(`${font_red}There's something wrong here`);
            }else {
                console.log(`${font_yellow}Install dependencies complete -> ${font_cyan + process.argv[2]}`);
            }
        });
    }

    setTimeout(installDep, 3500);
    console.log(`${font_white}`);
}else if(process.argv[3] == undefined && process.argv[2] == undefined) {
    console.log(`\n${font_cyan}Please check your command and try again!`);
}