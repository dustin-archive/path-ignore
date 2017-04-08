module.exports = function (paths, ignores) {
  let result = []
  let edge = String.prototype

  for (let ignore of ignores) {
    if (ignore.lastIndexOf('.') > ignore.lastIndexOf('/')) {
      edge = edge.endsWith
    } else {
      edge = edge.startsWith
    }

    for (let path of paths) {
      if (!edge.call(path, ignore)) {
        result[result.length] = path
      }
    }
  }

  return result
}
