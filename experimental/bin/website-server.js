#!/usr/bin/env node

import { WebsiteServer } from "@dropbear/experimental-server";

function runApp() {
  const server = new WebsiteServer(3001);
  console.log(`Server: ${server}`);
}

runApp();