const bench = require('nanobench')

function testify () {
  return true
}

function createArray (value) {
  let result = []
  for (let i = 0; i < value; i++) {
    result[i] = i
  }
  return result
}

let arr = createArray(16)

bench('cached 100,000,000', function (b) {
  b.start()
  for (let x = 0; x < 100000000; x++) {
    for (let i = 0, length = arr.length; i < length; i++) {
      testify()
    }
  }
  b.end()
})

bench('uncached 100,000,000', function (b) {
  b.start()
  for (let x = 0; x < 100000000; x++) {
    for (let i = 0; i < arr.length; i++) {
      testify()
    }
  }
  b.end()
})
