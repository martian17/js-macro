#!/usr/bin/env node
import build from "../lib/build.js";
const cmd = process.argv[2];
const args = process.argv.slice(3);

if(!cmd){
    console.log("Please provide the command");
    console.log("Available commands: build");
    process.exit(1);
}

if(cmd === "build"){
    build(args);
}else{
    console.log(`Unknown command: ${cmd}`);
    process.exit(1);
}

