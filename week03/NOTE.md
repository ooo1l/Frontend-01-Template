# 每周总结可以写在这里


### 找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的

* Array Object
* ArrayBuffer Object
* AsyncFunction Object
* Atomics Object
* Atomics
* BigInt
* BigInt64Array
* BigUint64Array
* Boolean
* DataView
* Date
* Error
* EvalError
* Float32Array
* Float64Array
* Function
* Generator
* GeneratorFunction
* Infinity
* Int16Array
* Int32Array
* Int8Array
* InternalError
* Intl
* Intl.Collator
* Intl.DateTimeFormat
* Intl.DisplayNames
* Intl.Locale
* Intl.NumberFormat
* Intl.PluralRules
* Intl.RelativeTimeFormat
* JSON
* Map
* Math
* NaN
* Number
* Object
* Promise
* Proxy
* RangeError
* ReferenceError
* Reflect
* RegExp
* Set
* SharedArrayBuffer
* String
* Symbol
* SyntaxError
* TypeError
* TypedArray
* URIError
* Uint16Array
* Uint32Array
* Uint8Array
* Uint8ClampedArray
* WeakMap
* WeakSet
* WebAssembly
* decodeURI()
* decodeURIComponent()
* encodeURI()
* encodeURIComponent()
* eval()
* globalThis
* isFinite()
* isNaN()
* null
* parseFloat
* parseInt
* undefined

* Object 对象无法实现出来， 有Object.prototype.hasOwnProperty(), isPrototypeOf() 等属性
* Function 对象无法实现出来, 有Function.prototype.apply(), call() 等属性
