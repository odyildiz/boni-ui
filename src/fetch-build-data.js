import { writeFile } from 'fs/promises';
import { resolve } from 'path';

const BASE_API_URL = import.meta.env?.VITE_BASE_API_URL || 'http://localhost:8080';

const MENU_CONTENT_URL = '/ui/menu/list'; 
const MENU_CONTENT_PATH = 'src/content/menu-content.json';

const GALLERY_CONTENT_URL = '/ui/gallery/list'; 
const GALLERY_CONTENT_PATH = 'src/content/gallery-content.json';

createContent(MENU_CONTENT_PATH, MENU_CONTENT_URL);
createContent(GALLERY_CONTENT_PATH, GALLERY_CONTENT_URL);

async function createContent(contentFilePath, url) {

  console.log('fetching ' + BASE_API_URL + url)

  try {
    const response = await fetch(BASE_API_URL + url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const jsonData = await response.json();
    const content = JSON.stringify(jsonData);
  
    await writeFile(resolve(process.cwd(), contentFilePath), content);
    console.log(contentFilePath + 'file created successfully');
  } catch (error) {
    console.error('Error fetching API data:', error);
    process.exit(1);
  }
  
}