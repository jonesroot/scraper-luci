# SnapSave Scraper
[Documentation](https://jonesroot.github.io/scraper/modules/_bochilteam_scraper_instagram.html)

## Installation
```sh
npm i @jonesroot/scraper-snapsave
```

## Usage 
Example download Instagram video
```ts
// import module
import { snapsave } from '@jonesroot/scraper-snapsave'

const data = await snapsave('https://www.instagram.com/reel/CxSEjxfyJtN')
console.log(data) // JSON
```
