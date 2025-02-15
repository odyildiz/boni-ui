import { writeFile } from 'fs/promises';
import { resolve } from 'path';

const BASE_API_URL = import.meta.env?.VITE_BASE_API_URL || 'http://localhost:8080/ui/';

const MENU_CONTENT_URL = 'menu/list'; 
const MENU_CONTENT_PATH = 'src/content/menu-content.json';

createContent(MENU_CONTENT_PATH, MENU_CONTENT_URL);

async function createContent(contentFilePath, url) {

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