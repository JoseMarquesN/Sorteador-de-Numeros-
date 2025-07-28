function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    
    if (de >= ate) {
        alert('Reveja os números colocados');
        document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Erro Digite um número Correto</label>`;
        return;
    }

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
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}

function reiniciar() {
    limparCampodoUsuario();
    resultado1();
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
}