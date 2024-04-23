function calcularIMC() {
    var pesoInput = document.getElementById('peso').value;
    var alturaInput = document.getElementById('altura').value;
    
    pesoInput = pesoInput.replace(',', '.');
    alturaInput = alturaInput.replace(',', '.');
    
    var peso = parseFloat(pesoInput);
    var altura = parseFloat(alturaInput);
    
    if (altura > 3) {
        altura /= 100; 
    }
    
    var resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "<p class='error'>Por favor, insira um peso e altura válidos.</p>";
        return;
    }

    var imc = peso / (altura ** 2);
    var interpretacao = "";
    var interpretacaoClasse = "";

    if (imc < 18.5) {
        interpretacao = "Abaixo do peso";
        interpretacaoClasse = "abaixo-peso";
    } else if (imc < 25) {
        interpretacao = "Peso normal";
        interpretacaoClasse = "peso-normal";
    } else if (imc < 30) {
        interpretacao = "Sobrepeso";
        interpretacaoClasse = "sobrepeso";
    } else {
        interpretacao = "Obesidade";
        interpretacaoClasse = "obesidade";
    }

    resultado.innerHTML = "<p>Seu IMC é <span class='imc'>" + imc.toFixed(2) + "</span>, o que indica: <span class='" + interpretacaoClasse + "'>" + interpretacao + "</span></p>";
}
