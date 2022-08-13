import { Options } from "./types";

// TODO: Implement methods.
class Menu implements Options {
  askVideo(video: string): Promise<string | void | undefined> {
    throw new Error("Method not implemented.");
  }
  welcome(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  menuActions(): Promise<string | void | undefined> {
    throw new Error("Method not implemented.");
  }
  handleMenu(choice: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  askQuestion(name: string, type: string, message: string): void {
    throw new Error("Method not implemented.");
  }
  download(url: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  about(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  exit(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unknown(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
