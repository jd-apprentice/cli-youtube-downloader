// imports
import { app, menuActions, welcome } from "./main.js";

// ------------------------INIT---------------------------------------- //
async function run(){
  console.clear();
  await welcome();
  await menuActions();
  app.executeAction(); // AppInstance = false;
}
// ------------------------RUN---------------------------------------- //
run();
