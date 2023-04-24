import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  nodeResolve: true,
  watch: true,
  files: 'test/**/*.test.js',
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'webkit' }),
    playwrightLauncher({ product: 'firefox'}),
  ],
};