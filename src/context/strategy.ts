import inquirer from "inquirer";
import ytdl from "ytdl-core";
import { ActionStrategy } from "./base.js";
import fs from "fs";
import { sleep, menuActions } from "../main.js";
import open from "open";

// ------------------------DOWNLOAD---------------------------------------- //
export class DownloadVideoStrategy implements ActionStrategy {
  urlToDownload: string = "";

  public async execute() {
    const answers = await inquirer.prompt({
      name: "url",
      type: "input",
      message: "What video you want to download \n",
    });
    this.urlToDownload = answers.url;
    return this.handleDownload(this.urlToDownload);
  }

  private async handleDownload(video: string): Promise<void> {
    try {
    const isValid = ytdl.validateURL(video);
    isValid
      ? ytdl(video).pipe(fs.createWriteStream("video.mp4"))
      : (console.log("Not a valid URL!"), menuActions());
    } catch(err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error("Something went wrong");
    }
  }
}

// ------------------------ABOUT---------------------------------------- //
export class AboutStrategy implements ActionStrategy {
  public async execute() {
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
}

// ------------------------??????---------------------------------------- //
export class UnkownStrategy implements ActionStrategy {
  baseURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  public async execute() {
    await open(this.baseURL);
    menuActions();
  }
}

// ------------------------APP---------------------------------------- //
export class AppStrategy implements ActionStrategy {
  public appInstance: boolean = true;

  execute(): void {
    this.appInstance = !this.appInstance;
  }
}
