const bench = require('nanobench')

function startsWith (value, start) {
  return value.slice(0, start.length) === start
}

bench('String.prototype.startsWith 100,000,000', function (b) {
  b.start()
  for (let i = 0; i < 100000000; i++) {
    'foobar'.startsWith('foo')
  }
  b.end()
})

bench('function startsWith 100,000,000', function (b) {
  b.start()
  for (let i = 0; i < 100000000; i++) {
    startsWith('foobar', 'foo')
  }
  b.end()
})
