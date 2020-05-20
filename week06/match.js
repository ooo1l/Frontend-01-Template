/* JS中的有限状态机
 * 1. 每个函数是一个状态,函数的参数就是入参
 *    在函数中，可以自由的编写代码，处理每个状态的逻辑，返回值作为下一个状态
 * 2. 以下是调用，
 *    获取输入，把状态机的返回值作为下一个状态
 */
// function match (string) {
//     let state = start
//     for (let c of string) {
//         console.log(c)
//         state = state(c)
//     }
//     return state === end
// }
// function start (c) {
//     if (c === 'a') {
//         return foundA
//     } else {
//         return start
//     }
// }

// function end(c) {
//     return end
// }

// function foundA(c) {
//     if (c === 'b') {
//         return foundB
//     } else {
//         return start
//     }
// }

// function foundB(c) {
//   if (c === "c") {
//     return foundC;
//   } else {
//     return start;
//   }
// }

// function foundC(c) {
//   if (c === "a") {
//     return foundA2;
//   } else {
//     return start;
//   }
// }

// function foundA2(c) {
//   if (c === "b") {
//     return foundB2;
//   } else {
//     return start;
//   }
// }

// function foundB2(c) {
//   if (c === "x") {
//     return end;
//   } else if (c === "c") {
//     return foundC;
//   } else {
//     return start
//   }
// }

// console.log(match("abcabcabcabx"))


function match(string) {
  let state = start;
  for (let c of string) {
    console.log(c);
    state = state(c);
  }
  return state === end;
}

function end(c) {
  return end;
}

function start(c) {
  if (c === "a") {
    return foundA;
  } else {
    return start;
  }
}


function foundA(c) {
  if (c === "b") {
    return foundB;
  } else {
    return start;
  }
}

function foundB(c) {
  if (c === "a") {
    return foundA2;
  } else {
    return start;
  }
}

function foundA2(c) {
  if (c === "b") {
    return foundB2;
  } else {
    return start;
  }
}

function foundB2(c) {
  if (c === "a") {
    return foundA3;
  } else {
    return start;
  }
}

function foundA3(c) {
  if (c === "b") {
    return foundB3;
  } else {
    return start;
  }
}

function foundB3 (c) {
  if (c === 'x') {
      return end
  } else if (c === 'a') {
    return foundA3
  }
  else {
      return start
  }
}

console.log(match("ababxabababx"));