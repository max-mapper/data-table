# data-table

super simple html5 json powered data table component. inspired by google refine/reclinejs

```
npm install data-table
```

## run the demo/hack on it

```
npm install
npm start
```

## usage

```js
var createTable = require('data-table')

var table = createTable(['a','b','c']) // headers

table.pipe(process.stdout)

table.write(['1', '2', '3']) // cells
table.write(['4', '5', '6']) // cells
table.end()
```

## license

BSD