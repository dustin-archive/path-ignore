const bench = require('nanobench')

function createString (value) {
  let result = ''
  for (let i = 0; i < value; i++) {
    result += i
  }
  return result
}

let str = createString(16)

bench('cached 100,000,000', function (b) {
  b.start()
  for (let x = 0; x < 100000000; x++) {
    for (let i = 0, length = str.length; i < length; i++);
  }
  b.end()
})

bench('uncached 100,000,000', function (b) {
  b.start()
  for (let x = 0; x < 100000000; x++) {
    for (let i = 0; i < str.length; i++);
  }
  b.end()
})
