const requireNoCache = (path) => {
  delete require.cache[require.resolve(path)]
  return require(path)
}

module.exports = requireNoCache
