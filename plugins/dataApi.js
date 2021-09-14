export default function(context, inject) {
  const appId = process.env.API_ID;
  const apiKey = process.env.API_KEY;

  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  };

  inject('dataApi', {
    getHomes,
    getHome,
    getReviewsByHomeId,
    getUserByHomeId
  });

  async function getHomes() {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/`,  {
          headers,
        })
      );
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  async function getHome(homeid) {
    try {
      return unWrap(
        await fetch(
          `https://${appId}-dsn.algolia.net/1/indexes/homes/${homeid}`,
          { headers }
        )
      );
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  async function getReviewsByHomeId(homeId) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`, {
          headers,
          method: 'Post',
          body: JSON.stringify({
            filters: `homeId:${homeId}`,
            hitsPerPage: 6,
            attributesToHighlight: []
          }),
        })
      );
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  async function getUserByHomeId(homeId) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/query`, {
          headers,
          method: 'Post',
          body: JSON.stringify({
            filters: `homeId:${homeId}`,
          }),
        })
      );
    } catch (error) {
      return getErrorResponse(error);
    }
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

  function getErrorResponse(error) {
    return {
      ok: false,
      status: 500,
      statusText: error.message,
      json: {},
    };
  }
}
