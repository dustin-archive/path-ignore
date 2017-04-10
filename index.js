function startsWith (value, start) {
  return value.slice(0, start.length) === start
}

function endsWith (value, end) {
  return value.slice(value.length - end.length) === end
}

module.exports = function (paths, ignores) {
  let result = []
  let edge

  for (let i = 0, length = ignores.length; i < length; i++) {
    let ignore = ignores[i]

    if (ignore.lastIndexOf('.') > ignore.lastIndexOf('/')) {
      edge = endsWith
    } else {
      edge = startsWith
    }

    for (let j = 0, length = paths.length; j < length; j++) {
      let path = paths[j]

      if (!edge(path, ignore)) {
        result[result.length] = path
      }
    }
  }

  return result
}
