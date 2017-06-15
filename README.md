
<!--#echo json="package.json" key="name" underline="=" -->
date2imap
=========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Convert a JS Date or milliseconds-since-epoch to an RFC 3501 date-text.
<!--/#echo -->


Usage
-----

from [test/all.js](test/all.js):

<!--#include file="test/all.js" start="//+r" stop="//-r" code="javascript" -->
<!--#verbatim lncnt="11" -->
```javascript
var hours = [ 0, 1, 6, 12, 18, 23 ], jsDateMonthOffset = -1,
  equal = require('assert').deepStrictEqual,
  date2imap = require('date2imap');

hours.forEach(function (hour) {
  var d = new Date(2010, 4 + jsDateMonthOffset, 2, hour);
  equal(date2imap(d), '02-Apr-2010');
  equal(date2imap(d.getTime()), '02-Apr-2010');
});
```
<!--/include-->



<!--#toc stop="scan" -->



&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
