/**
 *
 * @param {图片名称} image
 * @returns 图片地址
 */
function getAssetURL(image) {
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
export default getAssetURL
