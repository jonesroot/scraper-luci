import got from 'got'
import { TebakLirik, TebakLirikSchema } from '../types/index.js'

export let tebaklirikjson: TebakLirik[]
export default async function tebaklirik (): Promise<TebakLirik> {
  if (!tebaklirikjson) {
    tebaklirikjson = await got(
      'https://raw.githubusercontent.com/jonesroot/database/main/games/tebaklirik.json'
    ).json()
  }
  return TebakLirikSchema.parse(
    tebaklirikjson[Math.floor(Math.random() * tebaklirikjson.length)]
  )
}
