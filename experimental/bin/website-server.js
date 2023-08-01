#!/usr/bin/env node

import { WebsiteServer } from "../lib/index.js";

function runApp() {
  const server = new WebsiteServer(3001);
  server.start();
  console.log(`Server: ${server}`);
}

runApp();