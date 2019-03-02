"use strict";
var calcNum = function (base, diff) {
    var total = 1;
    for (var count = 0; count < diff; count++) {
        total = total * (base - count);
    }
    return total;
};
var calcComb = function (up, down) {
    var upN = calcNum(up, down);
    var downN = calcNum(down, down);
    return upN / downN;
};
var calcHiperGeom = function () {
    var N = Number(document.getElementsByTagName("input")[0].value);
    var n = Number(document.getElementsByTagName("input")[1].value);
    var k = Number(document.getElementsByTagName("input")[2].value);
    var result;
    if (!(isNaN(N) && isNaN(n) && isNaN(k))) {
        if (N >= n) {
            if (n >= k) {
                var res1 = calcComb(n, k);
                var res2 = calcComb(N - n, n - k);
                var res3 = calcComb(N, n);
                result = (res1 * res2) + " / " + res3 + " = " + ((res1 * res2) / res3);
            }
            else {
                result = "You can't have more correct numbers than balls drawn >:V";
            }
        }
        else {
            result = "You can't draw more balls than the amount of balls you have >:V";
        }
    }
    else {
        result = "You need to fill the data with numbers >:V";
    }
    document.getElementsByTagName("div")[0].innerHTML = result;
};
document.getElementsByTagName("input")[3].addEventListener("click", function () {
    calcHiperGeom();
});
