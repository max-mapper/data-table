# data-table

super simple html5 json powered data table component. inspired by google refine/reclinejs

```
npm install data-table
```

## usage

```js
var createTable = require('data-table')

var table = createTable([{ id: 1, name: 'bob'}])
table.appendTo(document.body)
table.on('edit', function(newRow, oldRow) {})
table.set(newRowData)
```

## license

BSD