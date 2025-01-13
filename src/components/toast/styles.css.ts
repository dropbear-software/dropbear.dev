import { css } from "lit";

export const componentStyles = css`
:host {
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
  position: fixed;
  z-index: 1;
  inset-block-end: 0;
  inset-inline: 0;
  padding-block-end: 5vh;
  pointer-events: none;
}

@keyframes fade-in {
  from { opacity: 0 }
}

@keyframes fade-out {
  to { opacity: 0 }
}

@keyframes slide-in {
  from { transform: translateY(var(--_travel-distance, 10px)) }
}

output {
  --_duration: 3s;
  --_travel-distance: 0;
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);

  max-inline-size: min(25ch, 90vw);
  padding-block: .5ch;
  padding-inline: 1ch;
  border-radius: 3px;
  font-size: 1rem;

  will-change: transform;
  animation: 
    fade-in .3s ease,
    slide-in .3s ease,
    fade-out .3s ease var(--_duration);
}

@media (prefers-reduced-motion: no-preference) {
  output {
    --_travel-distance: 5vh;
  }
}
`;