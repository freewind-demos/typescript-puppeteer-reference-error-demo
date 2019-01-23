import * as puppeteer from 'puppeteer';
import * as github from "./github";

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await github.open(page);

  await github.waitForPageTitleShownCorrectly(page);

  try {
    await github.waitForPageTitleShownWrongly(page);
  } catch (e) {
    console.log('Expected error:')
    console.error(e);
  }
  
  await browser.close();
}

run();
