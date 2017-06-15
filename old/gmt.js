/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = function date2imap(d) {
  if (d && d.getTime) { d = d.getTime(); }
  d = new Date(d);
  d.setTime(d.getTime() - (d.getTimezoneOffset() * 6e4));
  return d.toGMTString().split(/ /).slice(1, 4).join('-');
};
