import { getHeaders } from '../helpers';
import fetch from 'node-fetch'
import { unWrap, getErrorResponse} from '../../../utils/fetchUtils'

export default (algoliaConfig) => {
  const headers = getHeaders(algoliaConfig);
  return {
    create: async (homeId, payload) => {
      try {
        return unWrap(
          await fetch(
            `https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
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
    }
  };
};
