import { test, expect } from '@playwright/test';
import { baseUrl } from '../playwright.config';


test('About Us Page has KathakalAI Button in title', async ({ page }) => {
    await page.goto("/about-us")
    await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible()
});


test('Clicking on Kathakali In About Us Page brings us to Kathakali Information page', async ({ page }) => {
    await page.goto("/about-us")
    await expect(page.getByRole('link', { name: 'Kathakali' })).toBeVisible()
    await page.getByRole('link', { name: 'Kathakali' }).click()
    await expect(page.getByText('Kathakali', { exact: true })).toBeVisible()

    // Check url is /cultures/kathakali
    expect(page.url()).toBe(`${baseUrl}/cultures/kathakali`)
});

// TODO: Test able to upload Character Recognition File

// TODO: Test able to upload Expression Recognition File