function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let alq = altura * altura;
    let imc = peso / alq;

    if (imc <= 18.5) {
        document.getElementById("resposta").innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Abaixo do peso)";
    } else if (imc >= 18.6 && imc <= 24.9) {
        document.getElementById("resposta").innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Peso normal)";
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("resposta").innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Sobrepeso)";
    } else if (imc >= 30 && imc <= 34.9) {
        document.getElementById("resposta").innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Obesidade grau 1)";
    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById("resposta").innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Obesidade grau 2)";
    } else {
        document.getElementById("resposta").innerHTML = "Seu IMC é " + imc.toFixed(2) + " (Obesidade grau 3)";
    }
}
