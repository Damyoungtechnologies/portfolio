import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BING_API_KEY = process.env.BING_API_KEY || 'e63c96ce6b9b461093fd045f3d3106c1';
const SITE_HOST = 'samuelayodeji027.netlify.app';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

async function submitToBing() {
  console.log('🚀 Starting URL submission to IndexNow (Bing)...');

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Sitemap not found at:', SITEMAP_PATH);
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;

  while ((match = regex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }

  if (urls.length === 0) {
    console.warn('⚠️ No URLs found in sitemap.');
    return;
  }

  console.log(`🔗 Found ${urls.length} URLs to submit.`);

  const payload = {
    host: SITE_HOST,
    key: BING_API_KEY,
    keyLocation: `https://${SITE_HOST}/${BING_API_KEY}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('✅ Successfully submitted URLs to IndexNow!');
    } else {
      const errorText = await response.text();
      console.error(`❌ Failed to submit URLs. Status: ${response.status}`, errorText);
    }
  } catch (error) {
    console.error('❌ Error during API request:', error.message);
  }
}

submitToBing();
