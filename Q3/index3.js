let peso = Number(prompt('Informe seu peso: '))
let altura = Number(prompt('Informe sua altura:'))

let alturatotal = altura*altura
let calculo = peso/alturatotal

alert('O resultado do IMC é:' + calculo);

if (calculo < 18.5) {
  alert("Baixo peso/Magreza!");
}
 else if (calculo >= 18.5 && calculo <24.9) {
  alert("Peso normal/Eutrofia!");
}
 else if (calculo >25.0 && calculo <29.9 ) {
  alert("Sobrepeso/Pré-obesidade!");
}
 else if (calculo >=30.0 && calculo <34.9){
  alert("Obesidade Grau I!");
}
else if (calculo >=35.0 && calculo <39.9 ){
  alert("Obesidade Grau II (Severa)!");
} else if (calculo => 40.0){
  alert("Obesidade Grau III (Mórbida)!");
};
