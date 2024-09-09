import { test, expect } from '@playwright/test';
import { baseUrl } from '../playwright.config';


test('Cultures Page has KathakalAI Button in title', async ({ page }) => {
    await page.goto("/cultures")
    await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible()
});


test('Clicking on Kathakali Read More brings us to Kathakali Information page', async ({ page }) => {
    await page.goto("/cultures")
    await expect(page.getByRole('button', { name: 'Kathakali Kathakali READ MORE' }).getByRole('button')).toBeVisible()
    await page.getByRole('button', { name: 'Kathakali Kathakali READ MORE' }).getByRole('button').click()
    await expect(page.getByText('Kathakali', { exact: true })).toBeVisible()

    // Check url is /cultures/kathakali
    expect(page.url()).toBe(`${baseUrl}/cultures/kathakali`)
});

// TODO: Test able to upload Character Recognition File

// TODO: Test able to upload Expression Recognition File