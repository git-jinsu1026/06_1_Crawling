const puppeteer = require('puppeteer');
const fs = require('fs')

//크롤링한 데이터를 fileSystem을 이용해서 실제 파일을 출력하는 
//크롤링은 모두 비동기


const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com', { waitUntil: 'networkidle2' })

    await page.waitFor(6000); //1초기달린다.

    const html = await page.content()
    fs.writeFileSync('example.html', html);
    await browser.close();
}

main();