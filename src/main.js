const relations = require('./sl-relations.json');

module.exports = function (symbol) {
  const relation = relations.find(i => i.s === symbol)
  return relation ? `https://coinmarketcap.com/currencies/${relation.l}/` : undefined;
};