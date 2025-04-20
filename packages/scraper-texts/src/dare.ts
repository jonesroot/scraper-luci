import got from 'got'
import { Dare, DareSchema } from '../types/index.js'

export let darejson: string[] = []
export default async function dare (): Promise<Dare> {
  if (!darejson.length) {
    darejson = await got(
      'https://raw.githubusercontent.com/jonesroot/database/main/kata-kata/dare.json'
    ).json()
  }
  return DareSchema.parse(
    darejson[Math.round(darejson.length * Math.random())]
  )
}
