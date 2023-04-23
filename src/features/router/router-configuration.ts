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
    name: 'about',
    pattern: new URLPattern(
      {
        pathname: '/about'
      }
    ),
    render: () => html`<about-page></about-page>`,
    enter: async () => {
      await import('../../pages/about/about-page.js');
      return true;
    },
  }
];