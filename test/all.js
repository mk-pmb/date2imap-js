﻿/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

//+r
var hours = [ 0, 1, 6, 12, 18, 23 ], jsDateMonthOffset = -1,
  equal = require('assert').deepStrictEqual,
  date2imap = require('date2imap');

hours.forEach(function (hour) {
  var d = new Date(2010, 4 + jsDateMonthOffset, 2, hour);
  equal(date2imap(d), '02-Apr-2010');
  equal(date2imap(d.getTime()), '02-Apr-2010');
});
//-r

console.log("+OK tests passed.");   //= "+OK tests passed."
