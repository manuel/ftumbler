(function(ftumbler) {
    ftumbler.zero = "0";
    ftumbler.one = "i";
    ftumbler.before = function(t) { return t.slice(0, -1) + ftumbler.zero + ftumbler.one; };
    ftumbler.after = function(t) { return t + ftumbler.one; };
    ftumbler.between = function(t1, t2) {
        if (t2 <= t1) throw "Tumblers not ordered: " + t1 + ", " + t2;
        var result;
        if (t1.length >= t2.length) {
            result = ftumbler.after(t1);
        } else {
            result = ftumbler.before(t2);
        }
        if ((result <= t1) || (result >= t2)) throw "Tumbler panic: " + t1 + " < " + result + " < " + t2;
        return result;
    }
})(typeof exports == "undefined" ? this["ftumbler"] = {} : exports);
