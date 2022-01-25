import {rejectHitBadRequest, hasBadBody, sendJSON} from '../helpers'
import { v4 as uuidv4 } from 'uuid';

export default (apis) => {
  return async (req, res) => {
    if(req.method == 'POST') {
      if(hasBadBody(req)) return rejectHitBadRequest(res)

      await createHome(req.identify, req.body, res)
      return
    }
    rejectHitBadRequest(res)
  }

  async function createHome(identify, body, res) {
    const homeId = uuidv4()
    const payload = {
      ...body,
      reviewCount: 0,
      reviewValue: 0,
      userId: identify.id
    }

    const response = await apis.homes.create(homeId, payload)

    if(!response.ok){
      res.statusCode = 500
      res.send()
      return
    }

    sendJSON({}, res)
  }
}