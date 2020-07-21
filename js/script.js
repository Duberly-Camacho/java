let peso = prompt("Ingresa tu peso : ");
let altura = prompt("Ingresa tu altura: ");

function IMC (peso, altura){
    let resultado = peso/(altura*altura);
    document.write("Tu indice de masa corporal es: " + resultado)

}
IMC (peso, altura);