/* eslint max-len: "off" */

export const homepageContent = (nonce: string) => {
return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Dropbear.dev</title>
    <link rel="stylesheet" href="/packages/design-system/css/lib/material-theme/index.css" nonce="${nonce}">
    <meta name="robots" content="noindex">
  </head>
  <body class="surface on-surface-text">
    <h1>Dropbear: Modern Web Consultancy</h1>
    <p>Coming Soon!</p>
    <script type="importmap" nonce="${nonce}">
    {
      "imports": {
        "@lit-labs/ssr-client": "https://ga.jspm.io/npm:@lit-labs/ssr-client@1.1.2/development/index.js",
        "@lit-labs/ssr-client/lit-element-hydrate-support.js": "https://ga.jspm.io/npm:@lit-labs/ssr-client@1.1.2/development/lit-element-hydrate-support.js",
        "@webcomponents/template-shadowroot/template-shadowroot.js": "https://ga.jspm.io/npm:@webcomponents/template-shadowroot@0.2.1/template-shadowroot.js",
        "lit": "https://ga.jspm.io/npm:lit@2.7.6/index.js",
        "lit/decorators.js": "https://ga.jspm.io/npm:lit@2.7.6/decorators.js",
        "tslib": "https://ga.jspm.io/npm:tslib@2.6.0/tslib.es6.mjs"
      },
      "scopes": {
        "https://ga.jspm.io/": {
          "@lit/reactive-element": "https://ga.jspm.io/npm:@lit/reactive-element@1.6.3/development/reactive-element.js",
          "@lit/reactive-element/decorators/": "https://ga.jspm.io/npm:@lit/reactive-element@1.6.3/development/decorators/",
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
    <script type="module" src="/packages/design-system/lib/index.js" nonce="${nonce}"></script>
  </body>
</html>
`};
