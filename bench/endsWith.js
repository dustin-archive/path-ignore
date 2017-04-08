const bench = require('nanobench')

function endsWith (value, end) {
  return value.slice(value.length - end.length) === end
}

bench('String.prototype.endsWith 100,000,000', function (b) {
  b.start()
  for (let i = 0; i < 100000000; i++) {
    'foobar'.endsWith('bar')
  }
  b.end()
})

bench('function endsWith 100,000,000', function (b) {
  b.start()
  for (let i = 0; i < 100000000; i++) {
    endsWith('foobar', 'bar')
  }
  b.end()
})
