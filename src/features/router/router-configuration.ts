import { RouteConfig } from "@lit-labs/router";
import { html } from "lit";

export const routerConfiguration: RouteConfig[] = [
  {
    name: 'home',
    pattern: new URLPattern(
      {
        pathname: '/'
      }
    ), 
    render: () => html`<home-page></home-page>`,
    enter: async () => {
      await import('../../pages/home/home-page.js');
      return true;
    },
  },
  {
    name: 'contact',
    pattern: new URLPattern(
      {
        pathname: '/contact-us{/}?'
      }
    ),
    render: () => html`<contact-page></contact-page>`,
    enter: async () => {
      await import('../../pages/contact/contact-page.js');
      return true;
    },
  }
];