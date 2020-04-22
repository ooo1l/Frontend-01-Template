# 每周总结可以写在这里

### 7种类型  
1. undefined, 从未被赋值的状态，（建议使用 void 0 来代替）  
2. null, 定义了但是为空  
3. Boolean, 逻辑意义上的真假  
4. String, 字符串的操作charAt, charCodeAt, length  
5. Number, 浮点数的比较不能用 ===   
6. Symbol, 整个系统对象都被Symbol重塑, 给对象添加Symbol.iterator属性,就可以使用for of 进行遍历  
7. Object, Number, String, Boolean Symbol的构造函数都是对象,其中 Number String Boolean 通过new的方式使用的时候就是 产生实例对象, 直接调用的时候就是表示强制类型转换.

为什么给对象添加的方法能用在基本类型上,根据基础类型构造一个临时对象,那么就可以在基础类型上调用对应对象的方法.

### 类型转换


1. 弱类型语言 与 强类型语言 和 静态语言 与 动态语言 不是一一对应的。 js 是弱类型语言，动态语言  
2. StringToNumber, 0b 二进制, 0o 八进制, 0x 十六进制  
3. NumberToString  
4. 装箱转换就是把基本类型转换为对应的对象  Object.prototype.toString 可以准确试别对象对应的基本类型的方法
5. 拆箱转换就是把对象类型转换为对应的基本类型, 拆箱转换会尝试使用typeOf和valueOf,如果都不存在产生类型错误,返回TypeError  

### 写一个 UTF-8 Encoding 的函数
```
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
	console.log(code)
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
		console.log(c)
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else {
			bytes.push(c.charCodeAt())
		};
    }
    return bytes;
}
```

### 写一个正则表达式 匹配所有 Number 直接量

```
var re = /((((0|[1-9]([0-9]+)?)\.([0-9]+)?([eE][+-]?[0-9]+)?|\.[0-9]+([eE][+-]?[0-9]+)?|(0|[1-9]([0-9]+)?)([eE][+-]?[0-9]+)?)|0[bB][01]+|0[oO][0-7]+|0[xX][0-9a-fA-F]+))/
```
### 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

```
 var re = /(("([^"\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*"|'([^'\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*'))/
```
