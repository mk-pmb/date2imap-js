#!/usr/bin/env nodejs
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2, coding: UTF-8 -*- */
'use strict';
process.argv.slice(2
  ).map(function (arg) { return (arg.match(/^\d+$/) ? +arg : arg); }
  ).map(require('date2imap')
  ).forEach(function (d) { console.log(d); });
