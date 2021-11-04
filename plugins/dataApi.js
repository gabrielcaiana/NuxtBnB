export default function(context, inject) {
  const headers = {
    'X-Algolia-API-Key': process.env.API_KEY,
    'X-Algolia-Application-Id': process.env.API_ID,
  };

  inject('dataApi', {
    getHomes,
    getHome,
    getReviewsByHomeId,
    getUserByHomeId,
    getoHomeByLocation
  });

  async function getHomes() {
    try {
      return unWrap(
        await fetch(`https://${process.env.API_ID}-dsn.algolia.net/1/indexes/homes/`,  {
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
          `https://${process.env.API_ID}-dsn.algolia.net/1/indexes/homes/${homeid}`,
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
        await fetch(`https://${process.env.API_ID}-dsn.algolia.net/1/indexes/reviews/query`, {
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
        await fetch(`https://${process.env.API_ID}-dsn.algolia.net/1/indexes/users/query`, {
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

  async function getoHomeByLocation(lat, lng, radiusInMeters = 1500) {
    try {
      return unWrap(
        await fetch(`https://${process.env.API_ID}-dsn.algolia.net/1/indexes/homes/query`, {
          headers,
          method: 'Post',
          body: JSON.stringify({
            aroundLatLng: `${lat}, ${lng}`,
            aroundRadius: radiusInMeters,
            hitsPerPage: 10,
            attributesToHighlight: []
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
