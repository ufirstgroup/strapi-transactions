const Strapi = require('@strapi/strapi')
let instance

module.exports = async () => {
  if (!instance) {
    instance = await Strapi({}).load()
  }
}

