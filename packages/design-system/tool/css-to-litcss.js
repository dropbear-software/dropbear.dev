import { writeFileSync, readFileSync } from "node:fs"
import { fileURLToPath } from "node:url";

const inputFile = fileURLToPath(new URL("../css/lib/material-theme/index.css", import.meta.url));
const outputFile = fileURLToPath(new URL("../src/design-system.ts", import.meta.url));

try {
  const sourceFileContent = readFileSync(inputFile).toString('utf8');
  writeFileSync(outputFile, `
import {css} from 'lit';
export const designSystem = css\`${sourceFileContent}\`;
`);

} catch (error) {
  console.error(error);
}
