import { test, expect } from '@playwright/test';
import { baseUrl } from '../playwright.config';

test('Mobile menu button navigates to Cultures page from Home page', async ({
  page,
}) => {
  // Set the viewport to a mobile size
  await page.setViewportSize({ width: 375, height: 812 });

  await page.goto('/');
  await expect(page.locator('.menu')).toBeVisible();
  await page.locator('.menu').click();
  await page.getByRole('button', { name: 'Cultures' }).click();
  await expect(page).toHaveURL(`${baseUrl}/cultures`);
  await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible();
});
