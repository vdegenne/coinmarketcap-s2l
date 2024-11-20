import map from './ss-map.json';

export default function (symbol: string) {
	const slug = map[symbol];
	return slug ? `https://coinmarketcap.com/currencies/${slug}/` : undefined;
}
