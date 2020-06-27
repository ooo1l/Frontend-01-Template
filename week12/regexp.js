console.log(JSON.stringify("[a=value]".match(/\[([^=]+)=([^\]]+)\]/)))
// ["[a=value]","a","value"]

console.log(JSON.stringify("[a=value]".match(/\[(?:[^=]+)=(?:[^\]]+)\]/)));
// ["[a=value]"]

// ()捕获, （?:）不捕获

console.log(JSON.stringify("abc").replace(/a(b)c/, function (str, $1) {return $1+$1}))
// "bb"

