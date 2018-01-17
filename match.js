
/*** 非全局模式 ***/
/*
 * 多次调用match方法效果不变，捕获组不变
 * 1.如果找到匹配，返回一个数组：[匹配文本,捕获组],index属性:匹配文本子字符串中的起始索引,input属性:原始字符串值]
 * 2.如果未找到匹配，返回null
 * (基本和exec方法相同)
 */
var matchedStr = '<<js>>,    <<ts>>   <C#>>    <<python>>';
var noneMatchedStr = '111222';
var reg = /<<(\w*)>>/
console.log(matchedStr.match(reg));      // ["<<js>>", "js", index: 0, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                   // js
console.log(matchedStr.match(reg));      // ["<<js>>", "js", index: 0, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                   // js

console.log(noneMatchedStr.match(reg));  // null

/*** 全局模式 ***/
/**
 * 1.如过找到匹配，返回所有匹配的字符串；
 *   多次查询，结果不变
 * 2.如果未找到匹配，返回null
 */

var reg2 = /<<(\w*)>>/g
console.log(matchedStr.match(reg2));      // ["<<js>>", "<<ts>>", "<<python>>"]
console.log(RegExp.$1)                    // python
console.log(matchedStr.match(reg2));      // ["<<js>>", "<<ts>>", "<<python>>"]
console.log(RegExp.$1)                    // python

console.log(noneMatchedStr.match(reg2));  // null