const puppeteer = require('puppeteer');
const config = require('config');

const url = config.get('url');
const username = config.get('credentials.username');
const password = config.get('credentials.password');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [ // Disable Chromium's unnecessary SUID sandbox. Per https://community.gitpod.io/t/using-puppeteer-libnss3-no-file-or-directory-issue-on-gitpod/1762/11
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ]
    });
    const page = await browser.newPage();

    await page.goto(url);
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("aria/Enter email");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/Enter email");
        await element.type(username);
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/Enter password");
        await element.type(password);
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("input#format-export-format-pdf");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/Next >>");
        await element.click();
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("input#contentOptionVisible");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("ul#exportContentTree > li");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("ul#exportContentTree > li > input.exportContentTreeCheckbox");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("ul#exportContentTree > li > ul:nth-child(19) > li > input.exportContentTreeCheckbox");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("aria/Include Page Numbers");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/Export");
        await element.click();
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("aria/Download PDF");
        await element.click();
    }
    await browser.close();
})();
