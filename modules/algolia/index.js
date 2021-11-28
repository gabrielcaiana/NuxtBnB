import { get } from 'js-cookie'
import fetch from 'node-fetch'
import { unWrap, getErrorResponse} from '../../utils/fetchUtils'
import { getHeaders, sendJSON } from './helpers'

export default function () {
  const algoliaConfig = this.options.privateRuntimeConfig.algolia

  const headers = getHeaders(algoliaConfig)

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/api/user', getUserRoute)
  })

  async function getUserRoute(req, res, next) {
    const identity = req.identity
    const userData = await getUserById(identity.id)

    if(userData.status == 200) {
      sendJSON(userData.json, res)
      return
    }

    createUser(req.identity)
    sendJSON(makeUserPayload(identity), res)
  }

  async function createUser(identity) {
      try {
        return unWrap(
          await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${identity.id}`, {
            headers,
            method: 'PUT',
            body: JSON.stringify(makeUserPayload(identity)),
          })
        );
      } catch (error) {
        return getErrorResponse(error);
      }
  }

  async function getUserById(id) {
    try {
      return unWrap(
        await fetch(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${id}`, {
          headers
        })
      );
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  function makeUserPayload(identity) {
    return { 
      name: identity.name,
      email: identity.email,
      image: identity.image,
      homeId: [],
      reviewCount: 0,
      description: '',
      joined: new Date().toISOString()
    }
  }
}