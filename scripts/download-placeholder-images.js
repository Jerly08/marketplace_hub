const fs = require('fs');
const https = require('https');
const path = require('path');

// Create categories directory if it doesn't exist
const categoriesDir = path.join(process.cwd(), 'public', 'images', 'categories');
if (!fs.existsSync(categoriesDir)) {
  fs.mkdirSync(categoriesDir, { recursive: true });
}

// Placeholder images from placeholder.com (colored squares with category names)
const placeholders = {
  'electronics': 'https://via.placeholder.com/800x600/0077cc/FFFFFF?text=Electronics',
  'jewelry': 'https://via.placeholder.com/800x600/cc7700/FFFFFF?text=Jewelry',
  'mens-clothing': 'https://via.placeholder.com/800x600/00cc77/FFFFFF?text=Mens+Clothing',
  'womens-clothing': 'https://via.placeholder.com/800x600/cc0077/FFFFFF?text=Womens+Clothing',
  'default': 'https://via.placeholder.com/800x600/777777/FFFFFF?text=Category',
};

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(categoriesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file if there's an error
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      console.error(`Error accessing ${url}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  try {
    const downloads = Object.entries(placeholders).map(([name, url]) => {
      return downloadImage(url, `${name}.jpg`);
    });
    
    await Promise.all(downloads);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Failed to download all images:', error);
  }
}

downloadAll(); 