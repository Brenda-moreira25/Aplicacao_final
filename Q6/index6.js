const botao = document.getElementById("alterar-cor");

let corAtual = "green";
document.body.style.backgroundColor = corAtual;

botao.onclick = () => {
   if (corAtual === "green") {
    document.body.style.backgroundColor = "blue";
    corAtual = "blue"; 
  } 
  else if (corAtual === "blue") {
    document.body.style.backgroundColor = "yellow";
    corAtual = "yellow"; 
  } 
  else { 
    document.body.style.backgroundColor = "green";
    corAtual = "green"; 
  }
};