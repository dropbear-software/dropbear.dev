#!/usr/bin/env node

import { ApplicationServer } from "../lib/index.js";

function runApp() {
  // const server = new WebsiteServer(3001);
  const server = new ApplicationServer(3001, true);
  server.start();
  console.log(`Server: ${server}`);
}

runApp();