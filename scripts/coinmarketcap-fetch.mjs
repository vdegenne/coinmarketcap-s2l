import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let symbolNameMap = [];
(async function () {
  let res = await fetch('https://api.coinmarketcap.com/data-api/v3/map/all?listing_status=active,untracked&exchangeAux=is_active,status&cryptoAux=is_active,status&start=1&limit=10000')
  let info = await res.json()
  symbolNameMap = info.data.cryptoCurrencyMap.map(i => ({ s: i.symbol, l: i.slug }))
  res = await fetch('https://api.coinmarketcap.com/data-api/v3/map/all?listing_status=active,untracked&exchangeAux=is_active,status&cryptoAux=is_active,status&start=10001&limit=10000')
  info = await res.json()
  symbolNameMap = symbolNameMap.concat(info.data.cryptoCurrencyMap.map(i => ({ s: i.symbol, l: i.slug })))

  fs.writeFileSync(`${__dirname}/../src/sl-relations.json`, JSON.stringify(symbolNameMap))
})()


