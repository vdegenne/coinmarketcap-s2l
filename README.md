# coinmarketcap-s2l

CoinMarketCap (s)ymbol (2)to (l)ink converter.

```javascript
import coinmarketcap from 'coinmarketcap-s2l'

coinmarketcap('BTC') // returns https://coinmarketcap.com/currencies/bitcoin/
coinmarketcap('ADA') // returns https://coinmarketcap.com/currencies/cardano/
```

## Installation

```bash
npm install coinmarketcap-s2l
```

## Usage

Import in your app to generate link to coinmarketcap

```javascript
import coinmarketcap from 'coinmarketcap-s2l'

const anchor = document.createElement('a')
anchor.href = coinmarketcap('BTC') // generates the coinmarketcap url from the symbol
anchor.innerText = `go to the BTC coinmarketcap information page`

element.append(anchor)
```

### In a webpage

If you want to use this extension in a static webpage your server needs to accept the cors.
Then you have to import the script :

```html
<script type="module">
  import coinmarketcap from './node_modules/coinmarketcap-s2l/index.js'
  window.coinmarketcap = coinmarketcap; // Make the function available globally

  const linkToAdaCoinMarketCapPage = coinmarketcap('ADA')
</script>
```

## Build this module

```bash
node ./scripts/coinmarketcap-fetch.mjs
npm run build
```