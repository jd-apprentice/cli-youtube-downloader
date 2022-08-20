import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { Context } from "./context/base.js";
import {
  DownloadVideoStrategy,
  AboutStrategy,
  UnkownStrategy,
  AppStrategy,
} from "./context/strategy.js";

// ------------------------CONSTANTS---------------------------------------- //
const menuChoices = ["1", "2", "3", "4"];
export const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
export const app = new Context(new AppStrategy());

// ------------------------WELCOME---------------------------------------- //
export async function welcome(): Promise<void> {
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

// ------------------------HANDLE MENU---------------------------------------- //
export async function handleMenu(choice: "1" | "2" | "3" | "4"): Promise<void> {
  try {
  const choices = {
    "1": new Context(new DownloadVideoStrategy()),
    "2": new Context(new AboutStrategy()),
    "3": new Context(new UnkownStrategy()),
    "4": app,
  };
    choices[choice].executeAction();
  } catch (err: unknown) {
    if (err instanceof Error) throw err;
    throw new Error("Unable to execute action");
  }
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
