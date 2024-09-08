import { test, expect } from '@playwright/test';
import { baseUrl } from '../playwright.config';


test('Homepage has KathakalAI Button in title', async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible()
});


test('Clicking on Get Started brings us to cultures', async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole('button', { name: 'Get Started' })).toBeVisible()
    await page.getByRole('button', { name: 'Get Started' }).click()
    await expect(page.locator('div').filter({ hasText: /^Cultures$/ })).toBeVisible()

    // Check url is /cultures
    expect(page.url()).toBe(`${baseUrl}/cultures`)
});

test('Clicking on Learn More brings us to About Us', async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole('button', { name: 'Learn More →' })).toBeVisible()
    await page.getByRole('button', { name: 'Learn More →' }).click()
    await expect(page.locator('div').filter({ hasText: /^About Us$/ })).toBeVisible()

    // Check url is /about-us
    expect(page.url()).toBe(`${baseUrl}/about-us`)
});