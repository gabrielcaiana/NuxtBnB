export default function(context) {
  let userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent;
  let isMobile = /mobile/i.test(userAgent);
  context.isMobile = isMobile;
  context.store.commit('device/setMobile', isMobile);
}
