export default function(context, inject) {
  const appId = process.env.API_ID;
  const apiKey = process.env.API_KEY;

  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  };

  inject('dataApi', {
    getHome,
  });

  async function getHome(homeid) {
    return unWrap( await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeid}`, { headers }))
  }

  async function unWrap(response) {
    const json = await response.json();
    const { ok, status, statusText } = response;
    return {
      json,
      ok,
      status,
      statusText,
    };
  }
}
