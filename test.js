var sheet = require('./')

var sh = sheet(['a','b','c'])

sh.pipe(process.stdout)

sh.write(['1', '2', '3'])
sh.write(['4', '5', '6'])
sh.end()
