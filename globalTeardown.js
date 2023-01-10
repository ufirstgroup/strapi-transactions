/* global strapi */
module.exports = async () => {
  await strapi.destroy()
}
