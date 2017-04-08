module.exports = function (paths, ignores) {
  let result = []
  let edge = String.prototype

  for (let i = 0, ignoresLength = ignores.length; i < ignoresLength; i++) {
    let ignore = ignores[i]

    if (ignore.lastIndexOf('.') > ignore.lastIndexOf('/')) {
      edge = edge.endsWith
    } else {
      edge = edge.startsWith
    }

    for (let j = 0, pathsLength = paths.length; j < pathsLength; j++) {
      let path = paths[j]

      if (!edge.call(path, ignore)) {
        result[result.length] = path
      }
    }
  }

  return result
}
