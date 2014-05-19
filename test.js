var sheet = require('./')

var sh = sheet(['a','b','c'])

sh.pipe(process.stdout)

sh.write({a: '1', b: '2', c: '3'})
sh.write({a: '4', b: '5', c: '6'})
sh.end()
