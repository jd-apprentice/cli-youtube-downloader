// imports
import { ChildProcess } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import open from "open";
import ytdl from "ytdl-core";
import { about, welcome } from "./utils.js";

// ------------------------CONSTANTS AND TYPES---------------------------------------- //
type choicesType = {
  one: () => Promise<void>;
  two: () => Promise<void>;
  three: () => Promise<ChildProcess>;
  four: () => boolean;
};

let appInstance: boolean = true;
let urlToDownload: string = "";
const menuChoices = ["one", "two", "three", "four"];
const baseURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const choices: choicesType = {
  one: async () => await askVideo(),
  two: async () => await about(),
  three: async () => await open(baseURL),
  four: () => (appInstance = false),
};

// ------------------------HANDLE MENU---------------------------------------- //
async function handleMenu(choice: keyof typeof choices): Promise<void> {
  choices[choice]();
}

// ------------------------DOWNLOAD VIDEO---------------------------------------- //
export async function handleDownload(video: string): Promise<void> {
  const isValid = ytdl.validateURL(video);
  isValid
    ? ytdl(video).pipe(fs.createWriteStream("video.mp4"))
    : (console.log("Not a valid URL!"), menuActions());
}

// ------------------------GET VIDEO---------------------------------------- //
export async function askVideo(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "url",
    type: "input",
    message: "What video you want to download \n",
  });
  urlToDownload = answers.url;
  return handleDownload(urlToDownload);
}

// ------------------------MENU ACTIONS---------------------------------------- //
export async function menuActions(): Promise<void> {
  const answers = await inquirer.prompt({
    name: "menu_question",
    type: "list",
    message: "What action do you want to do?\n",
    choices: menuChoices,
  });
  return handleMenu(answers.menu_question);
}

// ------------------------RUN APP---------------------------------------- //
console.clear();
while (appInstance) {
  console.clear();
  await welcome();
  await menuActions();
  appInstance = false;
}
