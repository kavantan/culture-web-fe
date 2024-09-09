import { test, expect } from '@playwright/test';


test('Community Page has KathakalAI Button in title and various contents', async ({ page }) => {
    await page.goto("/community")
    await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible()

    await expect(page.getByText('Hi there!')).toBeVisible()
    await expect(page.getByText('Resources')).toBeVisible()
});

test('Kathakali Resources should be present', async ({ page }) => {
    await page.goto("/community")
    await expect(page.getByRole('button', { name: 'KathakalAI' })).toBeVisible()

    await expect(page.locator('div').filter({ hasText: /^KathakaliWatch a video on Kathakali here!Watch here$/ }).first()).toBeVisible()
    await expect(page.locator('div').filter({ hasText: /^KathakaliLearn more about Kathakali here!Read here$/ }).first()).toBeVisible()
});