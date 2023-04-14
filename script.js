const rangeInput_1 = document.getElementById('Blur');
const rangeInput_2 = document.getElementById('Spacing');
const input = document.getElementById('Base');
const image = document.getElementById('myimage');
rangeInput_1.addEventListener('input', () => {
    image.style.filter = `blur(${rangeInput_1.value}px)`;
});
rangeInput_2.addEventListener('input', () => {
    image.style.padding = rangeInput_2.value + "px";
});
input.addEventListener('input',()=>{
    image.style.backgroundColor = input.value;
})