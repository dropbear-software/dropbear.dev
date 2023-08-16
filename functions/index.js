/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
import { homepageContent } from './homepage.js';

export const helloWorld = onRequest((request, response) => {
  logger.info("Serving Home Page", {structuredData: true});
  response.send(homepageContent);
});
