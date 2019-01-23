TypeScript Puppeteer Reference Error Demo
=========================================

```
npm install -g puppeteer
npm run demo
```

You will see an error like:

```
UnhandledPromiseRejectionWarning: Error: Evaluation failed: ReferenceError: TITLE is not defined
```

The reason is here: <https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#code-transpilation-issues>

Note: since puppeteer needs to download a very huge Chrome which makes the installation quite slow,
I prefer install puppeteer globally and link it to this project before running.
