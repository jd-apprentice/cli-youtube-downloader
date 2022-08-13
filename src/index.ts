// imports
import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";
import chalkAnimation from "chalk-animation";

// constants
var appInstance: boolean = true; // App state
var urlToDownload: string = ""; // URL to download
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms)); // sleep for 1 second
const baseURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const menuChoices = ["1", "2", "3", "4"]; // Menu choices
const aboutText = `
░█░█░█▀█░█░█░▀█▀░█░█░█▀▄░█▀▀░░░█▀▄░█▀█░█░█░█▀█░█░░░█▀█░█▀█░█▀▄░█▀▀░█▀▄
░░█░░█░█░█░█░░█░░█░█░█▀▄░█▀▀░░░█░█░█░█░█▄█░█░█░█░░░█░█░█▀█░█░█░█▀▀░█▀▄
░░▀░░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀░░▀▀▀░░░▀▀░░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀░░▀▀▀░▀░▀

░█▀▄░█░█░░░▀▀█░█▀▄░░░░░█▀█░█▀█░█▀█░█▀▄░█▀▀░█▀█░▀█▀░▀█▀░█▀▀░█▀▀
░█▀▄░░█░░░░░░█░█░█░▄▄▄░█▀█░█▀▀░█▀▀░█▀▄░█▀▀░█░█░░█░░░█░░█░░░█▀▀
░▀▀░░░▀░░░░▀▀░░▀▀░░░░░░▀░▀░▀░░░▀░░░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀░▀▀▀
`;

// functions
async function welcome(): Promise<void> {
  chalkAnimation.rainbow("Youtube Downloader");
  await sleep();
  console.log(`
    ░█▄█░█▀▀░█▀█░█░█░░░█▀█░█▀█░▀█▀░▀█▀░█▀█░█▀█░█▀▀
    ░█░█░█▀▀░█░█░█░█░░░█░█░█▀▀░░█░░░█░░█░█░█░█░▀▀█
    ░▀░▀░▀▀▀░▀░▀░▀▀▀░░░▀▀▀░▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░▀▀▀ 

    1 - Download a video from Youtube
    2 - About the project
    3 - ${chalk.bgRed("????")}
    4 - Exit
  `);
}

// ---------------------------------------------------------------- //
async function about(): Promise<void> {
  console.log(aboutText);
  await sleep();
  menuActions();
}

// ---------------------------------------------------------------- //
async function handleMenu(choice: string): Promise<void> {
  if (choice == "1") await askVideo();
  if (choice == "2") await about();
  if (choice == "3") await open(baseURL)
  if (choice == "4") appInstance = false;
}

// ---------------------------------------------------------------- //
// TODO: Download the video
async function handleDownload(video: string): Promise<void> {
  console.log(video);
}

// ---------------------------------------------------------------- //
async function askVideo(): Promise<void | string | undefined> {
  const answers = await inquirer.prompt({
    name: "url",
    type: "input",
    message: "What video you want to download \n",
  });
  urlToDownload = answers.url;
  return handleDownload(urlToDownload);
}

// ---------------------------------------------------------------- //
async function menuActions(): Promise<void | string | undefined> {
  const answers = await inquirer.prompt({
    name: "menu_question",
    type: "list",
    message: "What action do you want to do?\n",
    choices: menuChoices,
  });
  return handleMenu(answers.menu_question);
}

// Run app
console.clear();
while (appInstance) {
  console.clear();
  await welcome();
  await menuActions();
  appInstance = false;
}
