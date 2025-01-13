import { css } from "lit";

export const componentStyles = css`
.hero {
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Vertically center content */
  justify-content: space-between; /* Distribute content evenly */
  padding: 0 0 0 3rem; /* Add padding for breathing room */
  background-color: var(--md-sys-color-background); /* Set background color using Material 3 token */
  color: var(--md-sys-color-on-background); /* Set text color using Material 3 token */
}

.hero-content {
  flex: 1; /* Allow content to grow and take available space */
  max-width: 50%; /* Limit content width on larger screens */
  margin-right: 2rem; /* Add spacing between content and image */
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-image {
  flex: 1; /* Allow image to grow and take available space */
}

.hero-image img {
  aspect-ratio: 1920/1280;
  width: 100%;
  height: auto;
  object-fit: cover; /* Maintain aspect ratio and cover container */
}

.headline-large {
  font-family: var(--md-ref-typeface-plain);
  font-weight: 700;
}

.display-large {
  font-weight: 700;
}

/* Add media queries for responsive design */
@media (max-width: 1100px) { 
  .hero {
    flex-direction: column; /* Stack elements vertically on smaller screens */
    padding: 0;
  }

  .hero-content, .hero-image {
      max-width: 100%; /* Full width on smaller screens */
      margin: 0;
  }

  .hero-content {
      margin-bottom: 2rem; /* Add spacing between content and image */
      padding: 1rem;
  }
}
`;