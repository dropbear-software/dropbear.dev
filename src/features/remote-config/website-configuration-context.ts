import { createContext } from "@lit-labs/context";

import type { WebsiteConfiguration } from "./lib/types.js";
export type { WebsiteConfiguration } from "./lib/types.js";
export const websiteConfigurationContext = createContext<WebsiteConfiguration>('website-configuration');