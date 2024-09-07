import { defineConfig } from '@playwright/test';
export default defineConfig({
    testDir: './tests', // Define the folder where your test files will be stored
    timeout: 30000, // Maximum test time (in milliseconds)
    retries: 2, // Retry failed tests twice
    use: {
      headless: true, // Run tests in headless mode
      viewport: { width: 1280, height: 720 },
      video: 'retain-on-failure', // Record video on test failure
      baseURL: 'http://localhost:5173', // Base URL for all tests
      screenshot: 'only-on-failure', // Take screenshots only on test failure
    },
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' },
      },
      // Just going to test on Chromium so that tests run faster
      // {
      //   name: 'firefox',
      //   use: { browserName: 'firefox' },
      // },
      // {
      //   name: 'webkit',
      //   use: { browserName: 'webkit' },
      // },
    ],
  });