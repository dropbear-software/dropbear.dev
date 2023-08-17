/* eslint max-len: "off" */

export const homepageContent = (nonce: string) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Dropbear.dev</title>
    <link rel="stylesheet" href="/packages/design-system/css/lib/material-theme/index.css" nonce="${nonce}">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script nonce="${nonce}">window.dataLayer = [];</script>
  </head>
  <body class="surface on-surface-text">
    <home-page></home-page>
    <script type="importmap" nonce="${nonce}">
    {
      "imports": {
        "@lit-labs/ssr-client": "https://ga.jspm.io/npm:@lit-labs/ssr-client@1.1.2/development/index.js",
        "@lit-labs/ssr-client/lit-element-hydrate-support.js": "https://ga.jspm.io/npm:@lit-labs/ssr-client@1.1.2/development/lit-element-hydrate-support.js",
        "@material/web/button/filled-button.js": "https://ga.jspm.io/npm:@material/web@1.0.0-pre.15/button/filled-button.js",
        "@material/web/button/outlined-button.js": "https://ga.jspm.io/npm:@material/web@1.0.0-pre.15/button/outlined-button.js",
        "@webcomponents/template-shadowroot/template-shadowroot.js": "https://ga.jspm.io/npm:@webcomponents/template-shadowroot@0.2.1/template-shadowroot.js",
        "firebase/app": "https://ga.jspm.io/npm:firebase@10.1.0/app/dist/esm/index.esm.js",
        "firebase/analytics": "https://ga.jspm.io/npm:firebase@10.1.0/analytics/dist/esm/index.esm.js",
        "lit": "https://ga.jspm.io/npm:lit@2.7.6/index.js",
        "lit/decorators.js": "https://ga.jspm.io/npm:lit@2.7.6/decorators.js",
        "lit/directives/class-map.js": "https://ga.jspm.io/npm:lit@2.7.6/directives/class-map.js",
        "lit/static-html.js": "https://ga.jspm.io/npm:lit@2.7.6/static-html.js",
        "tslib": "https://ga.jspm.io/npm:tslib@2.6.0/tslib.es6.mjs",
        "@dropbear/web-design-system": "/packages/design-system/lib/index.js"
      },
      "scopes": {
        "https://ga.jspm.io/": {
          "@firebase/analytics": "https://ga.jspm.io/npm:@firebase/analytics@0.10.0/dist/esm/index.esm2017.js",
          "@firebase/app": "https://ga.jspm.io/npm:@firebase/app@0.9.15/dist/esm/index.esm2017.js",
          "@firebase/component": "https://ga.jspm.io/npm:@firebase/component@0.6.4/dist/esm/index.esm2017.js",
          "@firebase/installations": "https://ga.jspm.io/npm:@firebase/installations@0.6.4/dist/esm/index.esm2017.js",
          "@firebase/logger": "https://ga.jspm.io/npm:@firebase/logger@0.4.0/dist/esm/index.esm2017.js",
          "@firebase/util": "https://ga.jspm.io/npm:@firebase/util@1.9.3/dist/index.esm2017.js",
          "@lit/reactive-element": "https://ga.jspm.io/npm:@lit/reactive-element@1.6.3/development/reactive-element.js",
          "@lit/reactive-element/decorators/": "https://ga.jspm.io/npm:@lit/reactive-element@1.6.3/development/decorators/",
          "idb": "https://ga.jspm.io/npm:idb@7.1.1/build/index.js",
          "lit-element/lit-element.js": "https://ga.jspm.io/npm:lit-element@3.3.3/development/lit-element.js",
          "lit-html": "https://ga.jspm.io/npm:lit-html@2.8.0/development/lit-html.js",
          "lit-html/": "https://ga.jspm.io/npm:lit-html@2.8.0/development/"
        }
      }
    }
    </script>
    
    <!-- ES Module Shims: Import maps polyfill for older browsers without import maps support (eg Safari 16.3) -->
    <script nonce="${nonce}">
      window.esmsInitOptions = { polyfillEnable: ['css-modules', 'json-modules'] }
    </script>
    <script async src="https://ga.jspm.io/npm:es-module-shims@1.8.0/dist/es-module-shims.js" crossorigin="anonymous" nonce="${nonce}"></script>
    <script type="module" src="/packages/web-frontend/lib/pages/home/homepage.js" nonce="${nonce}"></script>
    <script type="module" src="/packages/web-frontend/lib/services/firebase.js" nonce="${nonce}"></script>
    <script type="module" src="/packages/web-frontend/lib/services/csa.js" nonce="${nonce}"></script>
  </body>
</html>
`;
};
