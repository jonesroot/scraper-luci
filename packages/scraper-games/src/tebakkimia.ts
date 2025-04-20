import got from 'got'
import { TebakKimia, TebakKimiaSchema } from '../types/index.js'

export let tebakkimiajson: TebakKimia[]
export default async function tebakkimia (): Promise<TebakKimia> {
  if (!tebakkimiajson) {
    tebakkimiajson = await got(
      'https://raw.githubusercontent.com/jonesroot/database/main/games/tebakkimia.json'
    ).json()
  }
  return TebakKimiaSchema.parse(
    tebakkimiajson[Math.floor(Math.random() * tebakkimiajson.length)]
  )
}
