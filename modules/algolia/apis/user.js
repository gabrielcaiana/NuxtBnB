import { getHeaders } from '../helpers';
import fetch from 'node-fetch'
import { unWrap, getErrorResponse} from '../../../utils/fetchUtils'

export default (algoliaConfig) => {
  const headers = getHeaders(algoliaConfig);
  return {
    create: async ({ id }, payload) => {
      try {
        return unWrap(
          await fetch(
            `https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${id}`,
            {
              headers,
              method: 'PUT',
              body: JSON.stringify(payload),
            }
          )
        );
      } catch (error) {
        return getErrorResponse(error);
      }
    },

    getById: async ({ id }) => {
      try {
        return unWrap(
          await fetch(
            `https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${id}`,
            {
              headers,
            }
          )
        );
      } catch (error) {
        return getErrorResponse(error);
      }
    },
  };
};
