import { test, expect } from '@playwright/test';

test('homepage has KathakalAI in title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible();
});
