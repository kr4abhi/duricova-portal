export const PORTS = [
  { name: 'Ho Chi Minh, Vietnam', rate: 420 },
  { name: 'Port Klang, Malaysia', rate: 380 },
  { name: 'Chittagong, Bangladesh', rate: 610 },
  { name: 'Bangkok, Thailand', rate: 510 },
  { name: 'Jakarta, Indonesia', rate: 480 },
]

export const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  INR: { symbol: '₹', rate: 86.5 },
  VND: { symbol: '₫', rate: 25400 },
}

export function getFreightEstimate({ tonnage, port, currency, packageSize }) {
  const durableContainers = Math.ceil(tonnage / 24)
  const conventionalContainers = Math.ceil(tonnage / 14)
  const containersSaved = Math.max(0, conventionalContainers - durableContainers)
  const currencyInfo = CURRENCIES[currency]
  const bagCount = packageSize === '1000kg' ? Math.ceil(tonnage) : Math.ceil((tonnage * 1000) / 25)

  return {
    tonnage,
    port: port.name,
    durableContainers,
    conventionalContainers,
    containersSaved,
    freightSavings: `${currencyInfo.symbol}${(containersSaved * port.rate * currencyInfo.rate).toLocaleString()}`,
    totalFreight: `${currencyInfo.symbol}${(durableContainers * port.rate * currencyInfo.rate).toLocaleString()}`,
    savingsPercent: conventionalContainers ? Math.round((containersSaved / conventionalContainers) * 100) : 0,
    bagCount: bagCount.toLocaleString(),
    packageLabel: packageSize === '1000kg' ? 'FIBC jumbo sacks' : '25kg bags',
  }
}