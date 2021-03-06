import { unWrap, getErrorResponse} from '@/utils/fetchUtils'

export default function( { $config }, inject) {
  const appId = $config.algolia.appId
  const apiKey = $config.algolia.apiKey

  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
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

  async function getoHomeByLocation(lat, lng, radiusInMeters = 1500) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/query`, {
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
}
