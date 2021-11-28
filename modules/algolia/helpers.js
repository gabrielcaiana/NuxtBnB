export function getHeaders(algoliaConfig) {
  return {
    'X-Algolia-API-Key': algoliaConfig.apiKey,
    'X-Algolia-Application-Id': algoliaConfig.appId,
  }
}

export function sendJSON(data, res) {
  res.setHeader('content-Type', 'application/json')
  res.end(JSON.stringify(data))
}
