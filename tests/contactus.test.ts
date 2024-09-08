import { test, expect } from '@playwright/test';
import { baseUrl } from '../playwright.config';


test('Contact Us Page has KathakalAI Button in title', async ({ page }) => {
    await page.goto("/contact-us")
    await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
});

test('Clicking on KathakalAI Button in title brings us to the home page', async ({ page }) => {
    await page.goto("/contact-us")
    await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible()
    await page.getByRole('button', { name: 'KathakalAI' }).click()
    await expect(page.locator('div').filter({ hasText: /^Home$/ })).toBeVisible()
    // Check url is /
    expect(page.url()).toBe(`${baseUrl}/`)
});