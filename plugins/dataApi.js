export default function(context, inject) {
  const appId = process.env.API_ID
  const apiKey = process.env.API_KEY

  inject('dataApi', {
    getHome
  })

  async function getHome(homeid) {
    const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeid}`, {
      headers: {
        "X-Algolia-API-Key": apiKey,
        "X-Algolia-Application-Id": appId
      }
    })

    const json = await response.json()
    return json
  }
}