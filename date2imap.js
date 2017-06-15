/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  var rfcMonths = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  function date2imap(d) {
    if ((d && typeof d) !== 'object') { d = new Date(d); }
    return (String(100 + d.getDate()).substr(1, 2) + '-' +
      rfcMonths[d.getMonth()] + '-' + d.getFullYear());
  }
  date2imap.rfc3501 = { abnf: { 'date-month': rfcMonths } };
  return date2imap;
}());
