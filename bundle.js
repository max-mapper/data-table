;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){var container = document.querySelector('.container')
var createTable = require('./')
var fs = require('fs')
var rows = JSON.parse("[\n  {\n    \"address\": \"85 2nd St, San Francisco, CA 94105, USA\",\n    \"created_at\": \"2011-06-07T03:36:34.830Z\",\n    \"testing\": \"hello\",\n    \"location_description\": \"7th floor suite 110 behind the front desk\",\n    \"business\": \"testing  1 2 3\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.39999055862425,\n        37.78830183288528\n      ]\n    }\n  },\n  {\n    \"address\": \"105 Cedar St, Waldport, OR 97394, USA\",\n    \"24hours\": \"1\",\n    \"created_at\": \"2011-06-07T20:57:29.025Z\",\n    \"testing\": \"hello\",\n    \"location_description\": \"in teh living room\",\n    \"business\": \"max's house\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -124.06412690877914,\n        44.426041690218234\n      ]\n    }\n  },\n  {\n    \"address\": \"85 2nd St, San Francisco, CA 94105, USA\",\n    \"created_at\": \"2011-06-07T23:33:19.461Z\",\n    \"testing\": \"hello\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.39979743957518,\n        37.788178890386014\n      ]\n    }\n  },\n  {\n    \"address\": \"5227 Locksley Ave, Oakland, CA 94618, USA\",\n    \"created_at\": \"2011-06-08T00:54:31.801Z\",\n    \"testing\": \"hello\",\n    \"location_description\": \"Basement \",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.2578763961792,\n        37.83883506228965\n      ]\n    }\n  },\n  {\n    \"address\": \"1242 Market St, San Francisco, CA 94102, USA\",\n    \"created_at\": \"2011-06-08T01:02:43.550Z\",\n    \"testing\": \"hello\",\n    \"business\": \"Bloom Studio\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.41591215133666,\n        37.778160509063824\n      ]\n    }\n  },\n  {\n    \"address\": \"37153 Elm St, Racine, OH 45771, USA\",\n    \"24hours\": \"1\",\n    \"created_at\": \"2011-06-13T20:59:28.356Z\",\n    \"testing\": \"hello\",\n    \"location_description\": \"2nd Floor Near Elevator\",\n    \"business\": \"123 Corp \",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -81.91146612167358,\n        38.97137114673137\n      ]\n    }\n  },\n  {\n    \"address\": \"85 2nd St, San Francisco, CA 94105, USA\",\n    \"created_at\": \"2011-06-14T21:30:49.305Z\",\n    \"testing\": \"hello\",\n    \"location_description\": \"6th Floor, Code for America offices, reception.\",\n    \"business\": \"Code for America\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.4000871181488,\n        37.78848836594184\n      ]\n    }\n  },\n  {\n    \"address\": \"1003 Main St W, Hamilton, ON L8S 1B2, Canada\",\n    \"business\": \"Columbia International College\",\n    \"created_at\": \"2011-06-15T00:51:54.372Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -79.90618228912354,\n        43.25806516359436\n      ]\n    }\n  },\n  {\n    \"address\": \"Niagara Falls, ON, CANADA\",\n    \"created_at\": \"2011-06-15T00:56:04.170Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -79.07890319824219,\n        43.08224188068615\n      ]\n    },\n    \"_attachments\": {\n      \"nttus.jpg\": {\n        \"content_type\": \"image/jpeg\",\n        \"revpos\": 1,\n        \"digest\": \"md5-DALDPeGtt2GrixoWY22V3w==\",\n        \"length\": 10417,\n        \"stub\": true\n      }\n    }\n  },\n  {\n    \"address\": \"85 2nd St, San Francisco, CA 94105, USA\",\n    \"business\": \"hahahahah\",\n    \"location_description\": \"blahblah\",\n    \"created_at\": \"2011-06-15T02:35:54.776Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.39999055862425,\n        37.78830183288528\n      ]\n    },\n    \"_attachments\": {\n      \"About Stacks copy.pdf\": {\n        \"content_type\": \"application/pdf\",\n        \"revpos\": 4,\n        \"digest\": \"md5-bnyEFqKTui2DvI3SDGzPUQ==\",\n        \"length\": 466028,\n        \"stub\": true\n      },\n      \"About Stacks copy 3.pdf\": {\n        \"content_type\": \"application/pdf\",\n        \"revpos\": 3,\n        \"digest\": \"md5-bnyEFqKTui2DvI3SDGzPUQ==\",\n        \"length\": 466028,\n        \"stub\": true\n      },\n      \"About Stacks copy 2.pdf\": {\n        \"content_type\": \"application/pdf\",\n        \"revpos\": 2,\n        \"digest\": \"md5-bnyEFqKTui2DvI3SDGzPUQ==\",\n        \"length\": 466028,\n        \"stub\": true\n      },\n      \"About Stacks.pdf\": {\n        \"content_type\": \"application/pdf\",\n        \"revpos\": 1,\n        \"digest\": \"md5-bnyEFqKTui2DvI3SDGzPUQ==\",\n        \"length\": 466028,\n        \"stub\": true\n      }\n    }\n  },\n  {\n    \"address\": \"1200 SW Salmon St, Portland, OR 97205, USA\",\n    \"business\": \"werwer\",\n    \"created_at\": \"2011-06-25T02:11:09.533Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.68524885177612,\n        45.5185565834675\n      ]\n    },\n    \"_attachments\": {\n      \"hUZQC.gif\": {\n        \"content_type\": \"image/gif\",\n        \"revpos\": 1,\n        \"digest\": \"md5-8NH2u22SVkAPfkx+icrVxQ==\",\n        \"length\": 1038527,\n        \"stub\": true\n      }\n    }\n  },\n  {\n    \"address\": \"16210 NE 20th St, Vancouver, WA 98684, USA\",\n    \"business\": \"East woods Presbyterian church\",\n    \"location_description\": \"SW hallway\",\n    \"created_at\": \"2011-07-29T16:13:34.157Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -122.50476837158203,\n        45.63794227272334\n      ]\n    }\n  },\n  {\n    \"address\": \"balcarce 350 (S), San Juan, Argentina\",\n    \"created_at\": \"2011-08-03T00:07:41.817Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -68.5821533203125,\n        -31.64886968844789\n      ]\n    }\n  },\n  {\n    \"address\": \"1500 Bollinger Canyon Rd, San Ramon, CA 94583, USA\",\n    \"created_at\": \"2011-08-25T20:48:42.939Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -121.99462294578552,\n        37.7711006140495\n      ]\n    }\n  },\n  {\n    \"address\": \"Greifswalder Stra√üe 50, 17498 Hinrichshagen, Deutschland\",\n    \"business\": \"dsf\",\n    \"location_description\": \"sdfdsf\",\n    \"created_at\": \"2011-10-05T20:16:40.694Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        13.339462280273438,\n        54.06966372970363\n      ]\n    }\n  },\n  {\n    \"address\": \"Hanoi, Ho√†n Ki·∫øm, Hanoi, Vietnam\",\n    \"business\": \"a\",\n    \"manufacturer\": \"a\",\n    \"model\": \"a\",\n    \"battery\": \"a\",\n    \"created_at\": \"2011-10-12T03:19:20.300Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        105.85000991821289,\n        21.03331734643977\n      ]\n    }\n  },\n  {\n    \"address\": \"Engelberger Aa, Switzerland\",\n    \"created_at\": \"2011-10-12T03:20:26.280Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        8.399004936218262,\n        46.91670846416821\n      ]\n    },\n    \"_attachments\": {\n      \"undefined\": {\n        \"content_type\": \"image/jpeg\",\n        \"revpos\": 1,\n        \"digest\": \"md5-B248rtdYocGMkaDpyuM2jw==\",\n        \"length\": 879394,\n        \"stub\": true\n      }\n    }\n  },\n  {\n    \"address\": \"Bolu/Bolu Province, Turkey\",\n    \"business\": \"Bolivia\",\n    \"location_description\": \"dasd\",\n    \"24hours\": \"1\",\n    \"manufacturer\": \"dasd\",\n    \"model\": \"dasd\",\n    \"serial\": \"3123\",\n    \"battery\": \"23\",\n    \"electrode_model\": \"32\",\n    \"created_at\": \"2011-11-16T02:09:12.678Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        31.611571311950684,\n        40.739486020568506\n      ]\n    }\n  },\n  {\n    \"address\": \"123 N Main St, Tulsa, OK 74103, USA\",\n    \"created_at\": \"2011-12-21T03:05:11.065Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -95.99413633346558,\n        36.157601555724725\n      ]\n    }\n  },\n  {\n    \"address\": \"Carrera, Armenia, Quind√≠o, Colombia\",\n    \"business\": \"test\",\n    \"location_description\": \"carrra\",\n    \"manufacturer\": \"test\",\n    \"model\": \"test\",\n    \"serial\": \"tests\",\n    \"battery\": \"tests\",\n    \"electrode_model\": \"tetsts\",\n    \"created_at\": \"2012-04-06T14:45:31.958Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -75.696702003479,\n        4.515184874841285\n      ]\n    },\n    \"_attachments\": {\n      \"iliveatlogo.gif\": {\n        \"content_type\": \"image/gif\",\n        \"revpos\": 1,\n        \"digest\": \"md5-1OXSdi5AWgpmKrbmA1w9gQ==\",\n        \"length\": 1401,\n        \"stub\": true\n      }\n    }\n  },\n  {\n    \"address\": \"Engelenstraat, 6532 Nijmegen, The Netherlands\",\n    \"created_at\": \"2012-11-02T09:09:38.555Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        5.829405784606934,\n        51.82983706423939\n      ]\n    }\n  },\n  {\n    \"address\": \"3 Research Place, Rockville, MD 20850, USA\",\n    \"business\": \"The door\",\n    \"location_description\": \"Suite 3\",\n    \"24hours\": \"1\",\n    \"created_at\": \"2013-01-20T02:16:33.734Z\",\n    \"geometry\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        -77.1847915649414,\n        39.104655320134604\n      ]\n    }\n  }\n]\n")
createTable(rows).appendTo(container)
},{"fs":2,"./":3}],2:[function(require,module,exports){// nothing to see here... no file methods for the browser

},{}],3:[function(require,module,exports){var fs = require('fs')
var mustache = require('mustache')
var template = "<div class=\"data-table-container\">\n  <table class=\"data-table\" cellspacing=\"0\">\n    <tbody>\n      <tr>\n        {{#notEmpty}}<td class=\"column-header\"></td>{{/notEmpty}}\n        {{#headers}}\n          <td class=\"column-header {{state}}\">\n            <div class=\"column-header-title {{state}}\">\n              {{#editable}}<a class=\"column-header-menu\"></a>{{/editable}}\n              <span class=\"column-header-name{{^editable}} slim{{/editable}}\">{{header}}</span>\n            </div>\n          </td>\n        {{/headers}}\n      </tr>\n      {{#rows}}\n        <tr data-id=\"{{id}}\">\n          <td>{{#editable}}<a class=\"row-header-menu\"></a>{{/editable}}</td>\n          {{#cells}}\n          <td data-header=\"{{header}}\" class=\"{{state}}\">\n            <div class=\"data-table-cell-content {{state}}\">\n              {{#editable}}<a href=\"javascript:{}\" class=\"data-table-cell-edit\" title=\"Edit this cell\">&nbsp;</a>{{/editable}}\n              <div class=\"data-table-cell-value {{state}}\">{{value}}</div>\n            </div>\n          </td>\n          {{/cells}}\n        </tr>\n      {{/rows}}\n      {{^rows}}\n        <!-- show nothing -->\n      {{/rows}}\n    </tbody>\n  </table>\n</div>"

module.exports = function(rows) {
  return new DataTable(rows)
}

function DataTable(rows) {
  this.rows = rows
  this.headers = this.getHeaders(rows)
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
  return true
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
},{"fs":2,"mustache":4}],4:[function(require,module,exports){(function(){/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    module.exports = factory; // CommonJS
  } else if (typeof define === "function" && define.amd) {
    define(factory); // AMD
  } else {
    root.Mustache = factory; // <script>
  }
}(this, (function () {

  var exports = {};

  exports.name = "mustache.js";
  exports.version = "0.7.2";
  exports.tags = ["{{", "}}"];

  exports.Scanner = Scanner;
  exports.Context = Context;
  exports.Writer = Writer;

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  function testRe(re, string) {
    return RegExp.prototype.test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRe(nonSpaceRe, string);
  }

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  function escapeRe(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  exports.escape = escapeHtml;

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view;
    this.parent = parent;
    this.clearCache();
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.clearCache = function () {
    this._cache = {};
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name === ".") {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf(".") > 0) {
            var names = name.split("."), i = 0;

            value = context.view;

            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) {
            break;
          }

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === "function") {
      value = value.call(this.view);
    }

    return value;
  };

  function Writer() {
    this.clearCache();
  }

  Writer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Writer.prototype.compile = function (template, tags) {
    var fn = this._cache[template];

    if (!fn) {
      var tokens = exports.parse(template, tags);
      fn = this._cache[template] = this.compileTokens(tokens, template);
    }

    return fn;
  };

  Writer.prototype.compilePartial = function (name, template, tags) {
    var fn = this.compile(template, tags);
    this._partialCache[name] = fn;
    return fn;
  };

  Writer.prototype.compileTokens = function (tokens, template) {
    var fn = compileTokens(tokens);
    var self = this;

    return function (view, partials) {
      if (partials) {
        if (typeof partials === "function") {
          self._loadPartial = partials;
        } else {
          for (var name in partials) {
            self.compilePartial(name, partials[name]);
          }
        }
      }

      return fn(self, Context.make(view), template);
    };
  };

  Writer.prototype.render = function (template, view, partials) {
    return this.compile(template)(view, partials);
  };

  Writer.prototype._section = function (name, context, text, callback) {
    var value = context.lookup(name);

    switch (typeof value) {
    case "object":
      if (isArray(value)) {
        var buffer = "";

        for (var i = 0, len = value.length; i < len; ++i) {
          buffer += callback(this, context.push(value[i]));
        }

        return buffer;
      }

      return value ? callback(this, context.push(value)) : "";
    case "function":
      var self = this;
      var scopedRender = function (template) {
        return self.render(template, context);
      };

      var result = value.call(context.view, text, scopedRender);
      return result != null ? result : "";
    default:
      if (value) {
        return callback(this, context);
      }
    }

    return "";
  };

  Writer.prototype._inverted = function (name, context, callback) {
    var value = context.lookup(name);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0)) {
      return callback(this, context);
    }

    return "";
  };

  Writer.prototype._partial = function (name, context) {
    if (!(name in this._partialCache) && this._loadPartial) {
      this.compilePartial(name, this._loadPartial(name));
    }

    var fn = this._partialCache[name];

    return fn ? fn(context) : "";
  };

  Writer.prototype._name = function (name, context) {
    var value = context.lookup(name);

    if (typeof value === "function") {
      value = value.call(context.view);
    }

    return (value == null) ? "" : String(value);
  };

  Writer.prototype._escaped = function (name, context) {
    return exports.escape(this._name(name, context));
  };

  /**
   * Low-level function that compiles the given `tokens` into a function
   * that accepts three arguments: a Writer, a Context, and the template.
   */
  function compileTokens(tokens) {
    var subRenders = {};

    function subRender(i, tokens, template) {
      if (!subRenders[i]) {
        var fn = compileTokens(tokens);
        subRenders[i] = function (writer, context) {
          return fn(writer, context, template);
        };
      }

      return subRenders[i];
    }

    return function (writer, context, template) {
      var buffer = "";
      var token, sectionText;

      for (var i = 0, len = tokens.length; i < len; ++i) {
        token = tokens[i];

        switch (token[0]) {
        case "#":
          sectionText = template.slice(token[3], token[5]);
          buffer += writer._section(token[1], context, sectionText, subRender(i, token[4], template));
          break;
        case "^":
          buffer += writer._inverted(token[1], context, subRender(i, token[4], template));
          break;
        case ">":
          buffer += writer._partial(token[1], context);
          break;
        case "&":
          buffer += writer._name(token[1], context);
          break;
        case "name":
          buffer += writer._escaped(token[1], context);
          break;
        case "text":
          buffer += token[1];
          break;
        }
      }

      return buffer;
    };
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];

    var token;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      switch (token[0]) {
      case '#':
      case '^':
        sections.push(token);
        collector.push(token);
        collector = token[4] = [];
        break;
      case '/':
        var section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
        break;
      default:
        collector.push(token);
      }
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        lastToken = token;
        squashedTokens.push(token);
      }
    }

    return squashedTokens;
  }

  function escapeTags(tags) {
    return [
      new RegExp(escapeRe(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRe(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  exports.parse = function (template, tags) {
    template = template || '';
    tags = tags || exports.tags;

    if (typeof tags === 'string') tags = tags.split(spaceRe);
    if (tags.length !== 2) {
      throw new Error('Invalid tags: ' + tags.join(', '));
    }

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          tokens.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr;
    while (!scanner.eos()) {
      start = scanner.pos;
      value = scanner.scanUntil(tagRes[0]);

      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(["text", chr, start, start + 1]);
          start += 1;

          if (chr === "\n") {
            stripSpace(); // Check for whitespace on the current line.
          }
        }
      }

      start = scanner.pos;

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) {
        break;
      }

      hasTag = true;
      type = scanner.scan(tagRe) || "name";

      // Skip any whitespace between tag and value.
      scanner.scan(whiteRe);

      // Extract the tag value.
      if (type === "=") {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === "{") {
        var closeRe = new RegExp("\\s*" + escapeRe("}" + tags[1]));
        value = scanner.scanUntil(closeRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = "&";
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error('Unclosed tag at ' + scanner.pos);
      }

      // Check section nesting.
      if (type === '/') {
        if (sections.length === 0) {
          throw new Error('Unopened section "' + value + '" at ' + start);
        }

        var section = sections.pop();

        if (section[1] !== value) {
          throw new Error('Unclosed section "' + section[1] + '" at ' + start);
        }
      }

      var token = [type, value, start, scanner.pos];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      } else if (type === "=") {
        // Set the tags for the next time around.
        tags = value.split(spaceRe);

        if (tags.length !== 2) {
          throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
        }

        tagRes = escapeTags(tags);
      }
    }

    // Make sure there are no open sections when we're done.
    var section = sections.pop();
    if (section) {
      throw new Error('Unclosed section "' + section[1] + '" at ' + scanner.pos);
    }

    return nestTokens(squashTokens(tokens));
  };

  // The high-level clearCache, compile, compilePartial, and render functions
  // use this default writer.
  var _writer = new Writer();

  /**
   * Clears all cached templates and partials in the default writer.
   */
  exports.clearCache = function () {
    return _writer.clearCache();
  };

  /**
   * Compiles the given `template` to a reusable function using the default
   * writer.
   */
  exports.compile = function (template, tags) {
    return _writer.compile(template, tags);
  };

  /**
   * Compiles the partial with the given `name` and `template` to a reusable
   * function using the default writer.
   */
  exports.compilePartial = function (name, template, tags) {
    return _writer.compilePartial(name, template, tags);
  };

  /**
   * Compiles the given array of tokens (the output of a parse) to a reusable
   * function using the default writer.
   */
  exports.compileTokens = function (tokens, template) {
    return _writer.compileTokens(tokens, template);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  exports.render = function (template, view, partials) {
    return _writer.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = exports.render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  return exports;

}())));

})()
},{}]},{},[1]);