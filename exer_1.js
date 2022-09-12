
function sumar(num1, num2, num3){
    const resultado = num1 + num2 + num3
    return resultado;
}

let mostrarResultado = sumar(1,2,3);
console.log(mostrarResultado);

class coche {
    constructor(numPuertas){
        this.numPuertas = numPuertas;
    }

    aumPuertas(nPuerta){
        return this.numPuertas += nPuerta
    }
    
}

const Lamborgini = new coche(2);

console.log("El Lamborgini tiene " + Lamborgini.aumPuertas(1) + " puertas")




