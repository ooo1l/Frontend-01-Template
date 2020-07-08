let rgb = reactive({r: 100, g: 100, b: 100})

effect(() => {
    document.getElementById("r").value = rgb.r;
})
effect(() => {
    document.getElementById("g").value = rgb.g;
});
effect(() => {
    document.getElementById("b").value = rgb.b;
});
effect(() => {
    document.getElementById("color").style.backgroundColor = 
    `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
});

document.getElementById("r").addEventListener("input", (event) => {
    rgb.r = event.target.value;
})
document.getElementById("g").addEventListener("input", (event) => {
    rgb.g = event.target.value;
})
document.getElementById("b").addEventListener("input", (event) => {
    rgb.b = event.target.value;
})