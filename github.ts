import {Page} from "puppeteer";

const TITLE = '.h1-mktg';

export async function open(page: Page) {
  await page.goto("http://github.com", {waitUntil: 'domcontentloaded'});
}

export async function waitForPageTitleShown(page: Page) {
  await page.waitFor(() => {
    const title = document.querySelector(TITLE);
    return title && title.textContent === 'Get started with GitHub Enterprise';
  });
}
