// netlify/plugins/clear-cache.js

const { onPostBuild } = require('@netlify/cache-utils')

exports.onPostBuild = async function ({ utils }) {
  // List all cached files for debugging
  const cachedFiles = await utils.cache.list()
  console.log('Cached files before clearing:', cachedFiles)

  // Remove all cached files
  for (const file of cachedFiles) {
    await utils.cache.remove(file)
    console.log(`Removed cache for: ${file}`)
  }

  console.log('Cache cleared after build!')
}
