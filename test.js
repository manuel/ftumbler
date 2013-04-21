#!/usr/bin/env node
var ftumbler = require("./ftumbler.js");

var array = [
    "i",
    "0i",
    "ii",
    "00i",
    "0ii",
    "i0i",
    "iii",
    "000i",
    "00ii",
    "0i0i",
    "0iii",
    "i00i",
    "i0ii",
    "ii0i",
    "iiii",
];

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        if (i != j) {
            var ta = array[i];
            var tb = array[j];
            if (ta < tb) {
                testBetween(ta, tb);
            } else {
                testBetween(tb, ta);
            }
        }
    }
}

function testBetween(t1, t2) {
    var between = ftumbler.between(t1, t2);
    if ((between <= t1) || (between >= t2)) throw "e1";
}

for (var i = 0; i < array.length; i++) {
    var t = array[i];
    var before = ftumbler.before(t);
    if (before >= t) throw "e2";
}

for (var i = 0; i < array.length; i++) {
    var t = array[i];
    var after = ftumbler.after(t);
    if (after <= t) throw "e3";
}
