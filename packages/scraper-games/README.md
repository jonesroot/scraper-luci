# Games data Scraper
Fetcher data from [games databases](https://github.com/jonesroot/database/tree/main/games)

## Installation
```sh
npm i @bochilteam/scraper-games
```

## Usage 
Example get asahotak data:
```ts
// Import module
import { asahotak } from '@bochilteam/scraper-games'

const data = await  asahotak()
console.log(data) // JSON
```
[Documentation](https://bochilteam.github.io/scraper/modules/_bochilteam_scraper_games.html)