export const state = () => ({
  isMobile: false,
})

export const mutations = {
  setMobile(state, payload) {
    state.isMobile = payload
  }
}