# BMKG Scraper
Contains scrapers [BMKG](https://www.bmkg.go.id/) website

## Installation
```sh
npm i @jonesroot/scraper-bmkg
```

## Usage 
Example get data gempa (earthquake):
```ts
// Import module
import { gempa } from '@jonesroot/scraper-bmkg'

const data = await gempa()
console.log(data) // JSON
```
[Documentation](https://jonesroot.github.io/scraper/modules/_bochilteam_scraper_bmkg.html)