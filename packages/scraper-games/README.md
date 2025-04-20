# Games data Scraper
Fetcher data from [games databases](https://github.com/jonesroot/database/tree/main/games)

## Installation
```sh
npm i @jonesroot/scraper-games
```

## Usage 
Example get asahotak data:
```ts
// Import module
import { asahotak } from '@jonesroot/scraper-games'

const data = await  asahotak()
console.log(data) // JSON
```
[Documentation](https://jonesroot.github.io/scraper/modules/_bochilteam_scraper_games.html)