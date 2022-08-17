import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { menuActions } from "./index.js";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

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

// ---------------------------------------------------------------- //
export async function about(): Promise<void> {
  console.log(`
    ░█░█░█▀█░█░█░▀█▀░█░█░█▀▄░█▀▀░░░█▀▄░█▀█░█░█░█▀█░█░░░█▀█░█▀█░█▀▄░█▀▀░█▀▄
    ░░█░░█░█░█░█░░█░░█░█░█▀▄░█▀▀░░░█░█░█░█░█▄█░█░█░█░░░█░█░█▀█░█░█░█▀▀░█▀▄
    ░░▀░░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀░░▀▀▀░░░▀▀░░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀░░▀▀▀░▀░▀
    
    ░█▀▄░█░█░░░▀▀█░█▀▄░░░░░█▀█░█▀█░█▀█░█▀▄░█▀▀░█▀█░▀█▀░▀█▀░█▀▀░█▀▀
    ░█▀▄░░█░░░░░░█░█░█░▄▄▄░█▀█░█▀▀░█▀▀░█▀▄░█▀▀░█░█░░█░░░█░░█░░░█▀▀
    ░▀▀░░░▀░░░░▀▀░░▀▀░░░░░░▀░▀░▀░░░▀░░░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀░▀▀▀
    `);
  await sleep();
  menuActions();
}
