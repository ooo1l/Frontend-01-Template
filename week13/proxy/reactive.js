let handlers = new Map();
let reactivities = new Map();
let usedReactivities = [];
let object = {
  a: 1,
  b: 2,
};

function reactive(obj) {
  // 保证return的reactive都是同一个，防止重复包装，提升性能。
  if (reactivities.has(obj)) {
    return reactivities.get(obj);
  }

  let proxy = new Proxy(obj, {
    get(obj, prop) {
      usedReactivities.push([obj, prop]);
      if (typeof obj[prop] === "object") {
        return reactive(obj[prop]);
      }
      return obj[prop];
    },
    set(obj, prop, val) {
      // 依赖收集之后，需要执行的函数
      obj[prop] = val;
      if (handlers.get(obj) && handlers.get(obj).get(prop)) {
        for (let handler of handlers.get(obj).get(prop)) {
          handler();
        }
      }
      return obj[prop];
    },
  });

  reactivities.set(obj, proxy);
  return proxy;
}

function effect(handler) {
  // 进行依赖收集
  usedReactivities = [];
  handler();
  // console.log(usedReactivities)
  for (let usedReactivity of usedReactivities) {
    let [obj, prop] = usedReactivity;
    // console.log([obj, prop])
    if (!handlers.has(obj)) {
      handlers.set(obj, new Map());
    }
    if (!handlers.get(obj).has(prop)) {
      handlers.get(obj).set(prop, []);
    }
    handlers.get(obj).get(prop).push(handler);
  }
}
