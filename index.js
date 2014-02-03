var fs = require('fs')
var mustache = require('mustache')
var template = fs.readFileSync(__dirname + '/template.mustache').toString()

module.exports = function(rows) {
  return new DataTable(rows)
}

module.exports.css = fs.readFileSync(__dirname + '/data-table.css').toString()

function DataTable(rows, editable) {
  this.rows = rows
  this.headers = this.getHeaders(rows)
  this.editable = editable
}

DataTable.prototype.appendTo = function(container) {
  if (typeof container === 'object') {
    var rendered = this.render()
    container.innerHTML = rendered
  }
  else {
    document.querySelector(container).appendChild(this.render())
  }
}

DataTable.prototype.isEditable = function() {
  return this.editable
}

DataTable.prototype.getHeaders = function(rows) {
  var headers = {}
  this.rows.forEach(function(row) {
    for (var key in row) headers[key] = true
  })
  return Object.keys(headers)
}

DataTable.prototype.domify = function(htmlString) {
  var div = document.createElement('div')
  div.innerHTML = htmlString
  return div.childNodes
}

DataTable.prototype.render = function() {
  var self = this
  var rows = this.rows
  if (rows.length < 1) return mustache.render(template, {})

  var tableRows = []

  rows.map(function(row) {
    var cells = []
    self.headers.map(function(header) {
      var value = ""
      if (row[header]) {
        value = row[header]
        if (typeof(value) == "object") value = JSON.stringify(value)
      }
      var cell = {header: header, value: value}
      cells.push(cell)
    })
    tableRows.push({id: row.id, cells: cells})
  })

  var headers = this.headers.map(function(header) {
    var header = {header: header}
    return header
  })

  var htmlString = mustache.render(template, {
    rows: tableRows,
    headers: headers,
    notEmpty: function() { return self.headers.length > 0 },
    editable: self.isEditable()
  })
  
  return htmlString
}