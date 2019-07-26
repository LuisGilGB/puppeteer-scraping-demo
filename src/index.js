const puppeteer = require('puppeteer');

const getPic = async () => {
    console.log('Starting...');
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    console.log('Browser launched');
    const page = await browser.newPage();
    console.log('Go to Google');
    await page.goto('https://google.es');
    console.log('Take screenshot');
    await page.screenshot({path: 'googleEs.png'});

    await browser.close();
}

getPic();