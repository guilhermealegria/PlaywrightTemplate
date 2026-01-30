import { openExample, clickMoreInfo } from '../actions/example.js';

export async function openExampleAndNavigate(page) {
  await openExample(page);
  await clickMoreInfo(page);
}
