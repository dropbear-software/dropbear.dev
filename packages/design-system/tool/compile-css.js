import 'zx/globals';
import { fileURLToPath } from "node:url";

const inputFile = fileURLToPath(new URL("../css/src/material-theme/index.css", import.meta.url));
const targetOutputFile = fileURLToPath(new URL("../css/lib/material-theme/index.css", import.meta.url));

// Ensure we can write to the target file
fs.ensureFileSync(targetOutputFile);

// Run Lightning CSS
await $`lightningcss --minify --bundle --sourcemap --targets '>= 0.25%' ${inputFile} -o ${targetOutputFile}`;