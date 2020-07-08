// case1
let dummy;
let ro = reactive(object);
effect(() => (dummy = ro.a));
console.log(dummy);
ro.a = 2;
console.log(dummy);

// case2
let v12, v1, v2;
let p1 = reactive({ a: 1 });
let p2 = reactive({ a: 2 });

effect(() => (v12 = p1.a + p2.a));
effect(() => (v1 = p1.a));
effect(() => (v2 = p2.a));

// case3
let v;
let p = reactive({ a: { x: 3 } });

effect(() => (v = p.a.x));
console.log(v);
p.a = { x: 4 };
console.log(v);
