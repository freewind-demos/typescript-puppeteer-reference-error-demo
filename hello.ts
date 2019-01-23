import * as puppeteer from 'puppeteer';
import * as github from "./github";

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await github.open(page);

  await github.waitForPageTitleShown(page);

  await browser.close();
}

run();
