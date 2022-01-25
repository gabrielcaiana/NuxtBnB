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

export function rejectHitBadRequest(res) {
  res.statusCode = 400
  res.end()
}

export function hasBadBody(req) {
  return !req.body || Object.keys(req.body).length === 0
}
