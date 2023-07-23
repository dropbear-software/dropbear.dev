import { copyFileSync, cpSync } from 'node:fs';
import { fileURLToPath } from "node:url";

const ROOT_PATH = fileURLToPath(new URL("../", import.meta.url));

// Copy the root document
copyFileSync(`${ROOT_PATH}index.html`, `${ROOT_PATH}dist/index.html`);

// Copy the assets
cpSync(`${ROOT_PATH}assets`, `${ROOT_PATH}dist/assets`, {recursive: true});