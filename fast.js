const puppeteer = require('puppeteer');

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com') //실제 스크린샷페이지

    await page.screenshot({ path: 'screenshot.png' })
    await browser.close(); //메모리 누수방지

    //스크린샷을 만드는것이 위에 목표

}

main()

//node ./fast.js