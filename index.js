module.exports = ignore
ignore.extension = extension

function extension (path) {
  if (path.lastIndexOf('.') > path.lastIndexOf('/')) {
    return true
  }

  return false
}

function ignore (paths, ignores) {
  let result = []
  let edge = String.prototype

  for (let ignore of ignores) {
    if (extension(ignore)) {
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
