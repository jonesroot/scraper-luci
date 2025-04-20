# Images Scraper
Scraper to find pictures/images 

## Installation
```sh
npm i @jonesroot/scraper-images
```

## Usage 
Example get images from Google image:
```ts
// Import module
import { googleImage } from '@jonesroot/scraper-images'

const data = await googleImage('Minecraft')
console.log(data) // JSON
```
[Documentation](https://jonesroot.github.io/scraper/modules/_bochilteam_scraper_images.html)