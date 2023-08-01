import { render } from '@lit-labs/ssr';
import { html } from 'lit';
import "@dropbear/website";

export interface RenderIndexProps {
  name: string
}

export function* renderIndex(props: RenderIndexProps) {
  yield `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lit SSR Test Page</title>
      </head>
      <style>
        body[dsd-pending] {
          display: none;
        }
      </style>
      <body dsd-pending>
        <script>
          if (HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
            // This browser has native declarative shadow DOM support, so we can
            // allow painting immediately.
            document.body.removeAttribute('dsd-pending');
          }
        </script>
        <script type="importmap">
        {
          "imports": {
            "@lit-labs/ssr-client": "https://ga.jspm.io/npm:@lit-labs/ssr-client@1.1.2/development/index.js",
            "@lit-labs/ssr-client/lit-element-hydrate-support.js": "https://ga.jspm.io/npm:@lit-labs/ssr-client@1.1.2/development/lit-element-hydrate-support.js",
            "@webcomponents/template-shadowroot/template-shadowroot.js": "https://ga.jspm.io/npm:@webcomponents/template-shadowroot@0.2.1/template-shadowroot.js",
            "lit": "https://ga.jspm.io/npm:lit@2.7.6/index.js",
            "lit/decorators.js": "https://ga.jspm.io/npm:lit@2.7.6/decorators.js",
            "tslib": "https://ga.jspm.io/npm:tslib@2.6.0/tslib.es6.mjs",
            "@dropbear/website": "/packages/website/lib/index.js",
            "@dropbear/design-system": "/packages/design-system/lib/index.js"
          },
          "scopes": {
            "https://ga.jspm.io/": {
              "@lit/reactive-element": "https://ga.jspm.io/npm:@lit/reactive-element@1.6.2/development/reactive-element.js",
              "@lit/reactive-element/decorators/": "https://ga.jspm.io/npm:@lit/reactive-element@1.6.2/development/decorators/",
              "lit-element/lit-element.js": "https://ga.jspm.io/npm:lit-element@3.3.2/development/lit-element.js",
              "lit-html": "https://ga.jspm.io/npm:lit-html@2.7.5/development/lit-html.js",
              "lit-html/": "https://ga.jspm.io/npm:lit-html@2.7.5/development/"
            }
          }
        }
        </script>

        <!-- ES Module Shims: Import maps polyfill for olrder browsers without import maps support (eg Safari 16.3) -->
        <script async src="https://ga.jspm.io/npm:es-module-shims@1.8.0/dist/es-module-shims.js" crossorigin="anonymous"></script>
  `;
  yield* render(html`<simple-greeting name=${props.name}></simple-greeting>`);
  yield `
      <script type="module">
        // Start fetching the Lit hydration support module (note the absence
        // of "await" -- we don't want to block yet).
        const litHydrateSupportInstalled = import(
          '@lit-labs/ssr-client/lit-element-hydrate-support.js'
        );

        if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
          // Fetch the declarative shadow DOM polyfill.
          const {hydrateShadowRoots} = await import(
            '@webcomponents/template-shadowroot/template-shadowroot.js'
          );

          // Apply the polyfill. This is a one-shot operation, so it is important
          // it happens after all HTML has been parsed.
          hydrateShadowRoots(document.body);

          // At this point, browsers without native declarative shadow DOM
          // support can paint the initial state of your components!
          document.body.removeAttribute('dsd-pending');
        }
        await litHydrateSupportInstalled;

        // Import component modules causing them to become interactive
        import('/packages/website/lib/components/simple-greeter/simple-greeter.js');

        import sheet from '/packages/design-system/css/lib/material-theme/index.css' assert { type: 'css' };

        document.adoptedStyleSheets = [sheet];
      </script>
    </body>
    </html>
  `;
}
