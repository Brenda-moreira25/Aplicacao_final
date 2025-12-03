const botao = document.getElementById("btn-entrar");

botao.onclick = () => {
    let resposta = prompt("Você tem mais de 18 anos?");

    if (resposta === "sim") {
        alert("Mentira!");
    } else {
        alert("Eu sabia!");
    }
};