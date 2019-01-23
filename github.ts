import {Page} from "puppeteer";

const TITLE = '.h1-mktg';

export async function open(page: Page) {
  await page.goto("http://github.com", {waitUntil: 'domcontentloaded'});
}

export async function waitForPageTitleShownWrongly(page: Page) {
  console.log('----- waitForPageTitleShownWrongly -----')
  await page.waitFor(() => {
    const title = document.querySelector(TITLE);
    return title && title.textContent === 'Get started with GitHub Enterprise';
  });
}

export async function waitForPageTitleShownCorrectly(page: Page) {
  console.log('----- waitForPageTitleShownCorrectly -----')
  await page.waitForFunction((titleSelector) => {
    const title = document.querySelector(titleSelector);
    return title && title.textContent === 'Get started with GitHub Enterprise';
  }, {}, TITLE);
}

