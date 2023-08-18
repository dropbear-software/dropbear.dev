/* eslint max-len: "off" */

export const contactPageContent = (nonce: string, importMap: string) => {
  return `<!DOCTYPE html>
<html lang="en-AU">
  <head>
    <meta charset="UTF-8">
    <title>Dropbear.dev</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,400;8..144,500;8..144,700&display=swap" rel="stylesheet" nonce="${nonce}">
    <link rel="stylesheet" href="/packages/design-system/css/lib/material-theme/index.css" nonce="${nonce}">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script nonce="${nonce}">window.dataLayer = [];</script>
    <style nonce="${nonce}">body { margin: 0; }</style>
  </head>
  <body class="surface on-surface-text">
    <contact-page></contact-page>
    <script type="importmap" nonce="${nonce}">
      ${importMap}
    </script>
    
    <!-- ES Module Shims: Import maps polyfill for older browsers without import maps support (eg Safari 16.3) -->
    <script nonce="${nonce}">
      window.esmsInitOptions = { polyfillEnable: ['css-modules', 'json-modules'] };
    </script>
    <script async src="https://ga.jspm.io/npm:es-module-shims@1.8.0/dist/es-module-shims.js" crossorigin="anonymous" nonce="${nonce}"></script>
    <script type="module" src="/packages/web-frontend/lib/pages/contact/contact-page.js" nonce="${nonce}"></script>
    <script type="module" src="/packages/web-frontend/lib/services/firebase.js" nonce="${nonce}"></script>
    <script type="module" src="/packages/web-frontend/lib/services/csa.js" nonce="${nonce}"></script>
  </body>
</html>
`;
};
