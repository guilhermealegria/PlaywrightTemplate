import { test, expect } from '@playwright/test';
import { openExampleAndNavigate } from '../src/flows/example.js';
import { loginSelectors } from '../src/selectors/example.js';

test('example navigation (functional abstraction)', async ({ page }) => {
  await openExampleAndNavigate(page);
  await expect(loginSelectors.heading(page)).toBeVisible();
});
