"use strict";
exports.__esModule = true;
var Hello = /** @class */ (function () {
    function Hello() {
        this.a = 1;
        this.b = 2;
    }
    return Hello;
}());
exports.Hello = Hello;
var a = function () { return 5; };
var b = function (c) {
    return c;
};
b('1');
var aa = "asd ads \nads\nadasd sadasd";
var q = 'qwe';
if (1) {
    q = '1';
}
function fun1(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1, 2, 2];
fun1(args[0], args[0], args[0]);
var args2 = [7, 8, 9, 10, 11];
var abx = function (per) {
    return per.name + per.age;
};
abx({ name: 'll', age: 12 });
