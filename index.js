var through = require('through2')
var path = require('path')
var fs = require('fs')
var beforeHeader = fs.readFileSync(path.join(__dirname, 'before-header.html'))
var beforeRow = fs.readFileSync(path.join(__dirname, 'before-row.html'))
var afterRow = fs.readFileSync(path.join(__dirname, 'after-row.html'))

function header(keys) {
  var out = ""
  for (var i = 0; i < keys.length; i++) {
    out += '<th class="tl cell column-header b bgy ">\n'
         + '  ' + keys[i] + '\n'
         + '</th>\n'
  }
  return out
}

function row(keys, data, rowNum) {
  var out = '<tr class="table-row" data-id="' + rowNum + '">\n'
  for (var i = 0; i < keys.length; i++) {
    var val = data[keys[i]] || ''
    if (typeof val === 'object') val = JSON.stringify(val)
    out += '  <td data-header="' + keys[i] + '" class="c">\n'
         + '    <div class="cv">' + val + '</div>\n'
         + '  </td>\n'
  }
  out += '</tr>\n'
  return out
}

module.exports = sheet

function sheet(keys) {
  var stream = through.obj(write, end)
  var rowCount = 0

  stream.push(beforeHeader.toString())
  stream.push(header(keys))
  stream.push(beforeRow.toString())
  
  return stream
  
  function write(obj, enc, next) {
    this.push(row(keys, obj, ++rowCount))
    next()
  }

  function end() {
    this.push(afterRow.toString())
    this.push(null)
  }
}
