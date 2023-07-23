import { unlinkSync, rmSync } from 'node:fs';
import { fileURLToPath } from "node:url";

const ROOT_PATH = fileURLToPath(new URL("../", import.meta.url));

// Delete any temporary files and folders associated with the build process
unlinkSync(`${ROOT_PATH}tsconfig.tsbuildinfo`);
rmSync(`${ROOT_PATH}.wireit`, { recursive: true });
rmSync(`${ROOT_PATH}lib`, { recursive: true });
rmSync(`${ROOT_PATH}dist`, { recursive: true });