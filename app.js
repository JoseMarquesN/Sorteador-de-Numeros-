function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;


    for (let i = 0; i < quantidade; i++) {
        numero = obterNúmeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNúmeroAleatorio(de, ate);
        }

        sorteados.push(numero); 
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    document.getElementById("btn-reiniciar").removeAttribute("disabled")
}

function resultado1() {
    let reiniciado = document.getElementById("resultado");
    reiniciado.innerHTML = `<label class="texto__paragrafo">Novo Sorteio</label>`;
}

function obterNúmeroAleatorio(min, max) {
    //let randomnumeber = parseInt(Math.random() * (max - min) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limparCampodoUsuario() {
    quantidade = document.getElementById("quantidade");
    de = document.getElementById("de");
    ate = document.getElementById("ate");

    quantidade.value = "";
    de.value = "";
    ate.value = "";
}

function reiniciar() {
    limparCampodoUsuario();
    resultado1();
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
}