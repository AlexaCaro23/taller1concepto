const PI = 3.14159;
let radio = 5;
function calcularArea() {
    let area = PI * (radio ** 2);
    return area;
}
let resultado = calcularArea();
console.log(`El área del circulo con radio ${radio} es: ${resultado}`);