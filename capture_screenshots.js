import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, 'src/assets');

const TARGETS = [
    {
        url: 'https://www.mmtigerssportsacademy.com/',
        filename: 'website_showcase.jpg'
    },
    {
        url: 'https://v0-badminton-academy-dashboard.vercel.app/',
        filename: 'poster_showcase.jpg'
    }
];

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        for (const target of TARGETS) {
            console.log(`Navigating to ${target.url}...`);
            try {
                // Extended timeout to 60s
                await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 60000 });
                const outputPath = path.join(ASSETS_DIR, target.filename);

                // Wait a bit for animations
                await new Promise(r => setTimeout(r, 2000));

                await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 });
                console.log(`Saved screenshot to ${outputPath}`);
            } catch (err) {
                console.error(`Error capturing ${target.url}:`, err.message);
            }
        }

        await browser.close();
        console.log('Done.');
    } catch (err) {
        console.error('Fatal Error:', err);
    }
})();
