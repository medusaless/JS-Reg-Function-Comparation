
/*** 非全局模式 ***/
/*
 * 多次调用test方法效果不变，捕获组不变
 * 1.找到匹配，返回true
 * 2.未找到匹配，返回false
 */

var matchedStr = '<<js>>,    <<ts>>   <C#>>    <<python>>';
var noneMatchedStr = '111222';
var reg = /<<(\w*)>>/
console.log(reg.test(matchedStr));       // true
console.log(RegExp.$1)                   // js
console.log(reg.test(matchedStr));       // true
console.log(RegExp.$1)                   // js

console.log(reg.test(noneMatchedStr));   // false

/*** 全局模式 ***/
/*
 * 多次调用test方法，如果已经找到一个匹配，会去寻找下一个匹配，捕获组改变
 * 1.找到匹配，返回true;
 *   多次调用，执行下一次匹配；
 *   
 * 2.未找到匹配，返回false
 */
var reg2 = /<<(\w*)>>/g
console.log(reg2.test(matchedStr));      // true
console.log(RegExp.$1)                   // js
console.log(reg2.test(matchedStr));      // true
console.log(RegExp.$1)                   // ts
console.log(reg2.test(matchedStr));      // true
console.log(RegExp.$1)                   // python
console.log(reg2.test(matchedStr));      // false
console.log(RegExp.$1)                   // python

/*** 全局搜索下如果RegExp.test返回false后继续执行test方法，则会再次从头开始进行正则匹配 ***/
console.log(reg2.test(matchedStr));      // true
console.log(RegExp.$1)                   // js

console.log(reg2.test(noneMatchedStr));  // false