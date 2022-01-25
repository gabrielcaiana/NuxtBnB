import userApi from './user'

export default (algoliaConfig) => {
  return {
    user: userApi(algoliaConfig)
  }
}