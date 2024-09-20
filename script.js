let quadrados = document.querySelectorAll(".quadrado");
let jogada = 0;
let jogoAtivo = true

quadrados.forEach((quadrado) => {
    quadrado.addEventListener('click', () => jogar(quadrado));
});

function jogar(quadrado) {

    if (jogoAtivo === false) {
        return
    }


    let texto = quadrado.innerHTML;

    // Alterna entre X e O, dependendo da jogada
    if (jogada % 2 === 0 && texto === "") {
        quadrado.innerHTML = "X";
        quadrado.style.backgroundColor = "lightgreen";
        jogada++;
    } else if (jogada % 2 !== 0 && texto === "") {
        quadrado.innerHTML = "O";
        quadrado.style.backgroundColor = " rgb(255, 113, 113)"
        jogada++;
    } else {
        alert("Quadrado já preenchido!");
        return;
    }

    verificarVencedor();
    if (jogada === 9 && jogoAtivo) { ganhou.innerHTML = "Deu velha!"; jogoAtivo = false;ganhou.style.opacity="1" }
}

function verificarVencedor() {
    let quadradoL1C1 = document.querySelector('[data-linha="1"][data-coluna="1"]').innerHTML;
    let quadradoL1C2 = document.querySelector('[data-linha="1"][data-coluna="2"]').innerHTML;
    let quadradoL1C3 = document.querySelector('[data-linha="1"][data-coluna="3"]').innerHTML;
    let quadradoL2C1 = document.querySelector('[data-linha="2"][data-coluna="1"]').innerHTML;
    let quadradoL2C2 = document.querySelector('[data-linha="2"][data-coluna="2"]').innerHTML;
    let quadradoL2C3 = document.querySelector('[data-linha="2"][data-coluna="3"]').innerHTML;
    let quadradoL3C1 = document.querySelector('[data-linha="3"][data-coluna="1"]').innerHTML;
    let quadradoL3C2 = document.querySelector('[data-linha="3"][data-coluna="2"]').innerHTML;
    let quadradoL3C3 = document.querySelector('[data-linha="3"][data-coluna="3"]').innerHTML;

    let = ganhou = document.getElementById("vencedor")

    if (quadradoL1C1 !== "" && quadradoL1C1 === quadradoL1C2 && quadradoL1C1 === quadradoL1C3) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL1C1} venceu!`;
        jogoAtivo = false;

    } else if (quadradoL2C1 !== "" && quadradoL2C1 === quadradoL2C2 && quadradoL2C1 === quadradoL2C3) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL2C1} venceu!`;
        jogoAtivo = false;
    } else if (quadradoL3C1 !== "" && quadradoL3C1 === quadradoL3C2 && quadradoL3C1 === quadradoL3C3) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL3C1} venceu!`;
        jogoAtivo = false;
    }

    // Verifica Colunas
    else if (quadradoL1C1 !== "" && quadradoL1C1 === quadradoL2C1 && quadradoL1C1 === quadradoL3C1) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL1C1} venceu!`;
        jogoAtivo = false;
    } else if (quadradoL1C2 !== "" && quadradoL1C2 === quadradoL2C2 && quadradoL1C2 === quadradoL3C2) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL1C2} venceu!`;
        jogoAtivo = false;
    } else if (quadradoL1C3 !== "" && quadradoL1C3 === quadradoL2C3 && quadradoL1C3 === quadradoL3C3) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL1C3} venceu!`;
        jogoAtivo = false;
    }

    // Verifica Diagonais
    else if (quadradoL1C1 !== "" && quadradoL1C1 === quadradoL2C2 && quadradoL1C1 === quadradoL3C3) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL1C1} venceu!`;
        jogoAtivo = false;
    } else if (quadradoL1C3 !== "" && quadradoL1C3 === quadradoL2C2 && quadradoL1C3 === quadradoL3C1) {
        ganhou.style.opacity = "1"
        ganhou.innerHTML = `O jogador ${quadradoL1C3} venceu!`;
        jogoAtivo = false;
    }

    return
}

function recomeçar() {
    quadrados.forEach((quadrado) => {
        quadrado.innerHTML = ""; // Limpa o conteúdo
        quadrado.style.backgroundColor = ""; // Opcional: Limpa a cor de fundo
    });

    jogada = 0; // Reseta o contador de jogadas
    jogoAtivo = true; // Define que o jogo está ativo novamente

    let ganhou = document.getElementById("vencedor");
    ganhou.style.opacity = "0"; // Limpa a mensagem de vitória
}