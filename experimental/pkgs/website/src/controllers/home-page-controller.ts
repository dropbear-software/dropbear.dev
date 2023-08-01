import { html } from "lit";
import { HeroSectionContent } from "../components/hero-section/hero-section-content.js";

export const homepageContent: HeroSectionContent = {
    headline: html`<strong>Increase Website Conversions with Our Data-Driven Approach</strong>`,
    leadText: html`<p>
      Are you looking to increase website conversions? If so, you need to use a data-driven approach.
      At Dropbear Software, we use data to identify and fix the problems that are preventing your website from generating leads and sales.
      </p>
      <p>
        Our team of experienced marketing and development consultants has helped businesses of all shapes and sizes achieve their online goals.
        We know what it takes to create a successful website that converts visitors into customers.
      </p>
      <p>
        If you're ready to increase your website conversions, contact us today for a free consultation.
      </p>`,
    primaryButton: {
      text: 'Primary Action',
      destination: '/'
    },
    secondaryButton: {
      text: 'Secondary Action',
      destination: '#'
    },
    heroImageSvg: html``
};
