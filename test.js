const tape = require('tape')
const ignore = require('./')

tape('ignore', t => {
  t.plan(4)
  t.same(
    ignore(
      [ 'foo/bar/baz.txt', 'bar/baz/foo.txt', 'baz/foo/bar.txt' ],
      [ 'bar' ]
    ),
    [ 'foo/bar/baz.txt', 'baz/foo/bar.txt' ],
    'ingore root path'
  )
  t.same(
    ignore(
      [ 'foo/bar/baz.txt', 'bar/baz/foo.txt', 'baz/foo/bar.txt' ],
      [ 'bar/baz/foo.txt' ]
    ),
    [ 'foo/bar/baz.txt', 'baz/foo/bar.txt' ],
    'ingore entire path'
  )
  t.same(
    ignore(
      [ 'foo/bar/baz.txt', 'bar/baz/foo.txt', 'baz/foo/bar.txt' ],
      [ 'foo.txt' ]
    ),
    [ 'foo/bar/baz.txt', 'baz/foo/bar.txt' ],
    'ingore file'
  )
  t.same(
    ignore(
      [ 'foo/bar/baz.txt', 'bar/baz/foo.txt', 'baz/foo/bar.txt' ],
      [ 'qux' ]
    ),
    [ 'foo/bar/baz.txt', 'bar/baz/foo.txt', 'baz/foo/bar.txt' ],
    'no ingore'
  )
})
