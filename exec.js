
/*** 非全局模式 ***/
/*
 * 多次调用exec方法效果不变，捕获组不变
 * 1.如果找到匹配，返回一个数组：[匹配文本,捕获组],index属性:匹配文本子字符串中的起始索引,input属性:原始字符串值]
 * 2.如果未找到匹配，返回null
 * (基本和match方法相同)
 */
var matchedStr = '<<js>>,    <<ts>>   <C#>>    <<python>>';
var noneMatchedStr = '111222';
var reg = /<<(\w*)>>/
console.log(reg.exec(matchedStr));      // ["<<js>>", "js", index: 0, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                  // js
console.log(reg.exec(matchedStr));      // ["<<js>>", "js", index: 0, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                  // js

console.log(reg.exec(noneMatchedStr));  // null

/*** 全局模式 ***/
/**
 * 1.如过找到匹配，返回一个数组：[匹配文本,捕获组],index属性:匹配文本子字符串中的起始索引,input属性:原始字符串值]
 *   多次调用，进行下一次匹配；
 *   匹配结束，返回null
 *   返回null后继调用，再重头开始
 * 
 * 2.如果未找到匹配，返回null
 */

var reg2 = /<<(\w*)>>/g
console.log(reg2.exec(matchedStr));      // ["<<js>>", "js", index: 0, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                   // js
console.log(reg2.exec(matchedStr));      // ["<<ts>>", "ts", index: 11, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                   // ts
console.log(reg2.exec(matchedStr));      // ["<<python>>", "python", index: 29, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                   // python
console.log(reg2.exec(matchedStr));      // null
console.log(RegExp.$1)                   // python

/*** 全局搜索下如果RegExp.exec返回null后继续执行test方法，则会再次从头开始进行正则匹配 ***/
console.log(reg2.exec(matchedStr));      // ["<<js>>", "js", index: 0, input: "<<js>>,    <<ts>>   <C#>>    <<python>>"]
console.log(RegExp.$1)                   // js

console.log(reg2.exec(noneMatchedStr));  // null