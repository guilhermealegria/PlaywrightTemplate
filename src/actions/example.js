import { loginSelectors } from '../selectors/example.js';

export async function openExample(page) {
  await page.goto('/');
}

export async function clickMoreInfo(page) {
  await loginSelectors.moreInfoLink(page).click();
}
