import { writeFileSync, readFileSync } from "node:fs"
import { fileURLToPath } from "node:url";


const inputFile = new URL("../css/lib/material-theme/index.css", import.meta.url);
const outputFile = new URL("../src/design-system.ts", import.meta.url);

try {
  const content = readFileSync(fileURLToPath(inputFile));
  writeFileSync(fileURLToPath(outputFile), `
import {css} from 'lit';
export const designSystem = css\`${content.toString('utf8')}\`;
`);

} catch (error) {
  console.error(error);
}