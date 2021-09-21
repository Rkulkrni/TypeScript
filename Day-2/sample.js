var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var test1 = 'India is my country';
console.log(test1);
var test2 = [2, 3, 4, 6];
var test3 = [3, 54, 6, 7];
var test4 = __spreadArray(__spreadArray([], test2, true), test3, true);
console.log(test4);
