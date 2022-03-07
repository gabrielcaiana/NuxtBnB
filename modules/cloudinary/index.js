import { createHash } from 'crypto';
export default function () {
  const config = this.options.privateRuntimeConfig.cloudinary;

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/api/cloudinary/signature', setSignature);
  });

  function setSignature(req, res) {
    try {
      const sha1 = createHash('sha1');
      const payload = [];

      Object.keys(req.body).forEach((key) => {
        payload.push(`${key}=${req.body[key]}`);
      });

      sha1.update(payload.sort().join('&') + config.apiSecret);
      res.end(
        JSON.stringify({
          signature: sha1.digest('hex'),
        })
      );
    } catch (error) {
      console.error(error);
    }
  }
}
