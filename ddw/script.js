//instrução get para pegar o elemento e guardar na variável
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

//variavel para retornar o resultado
let resultado = document.getElementById("resultado");

//define a função do botão calcular
  function calcular (){
  console.log("Calculando...");

//instrução para captar somente os valores dos campos
  let adultos  = inputAdultos.value;
  let criancas  = inputCriancas.value;
  let duracao  = inputDuracao.value;

  let qtdTotalBolo = (boloPP(duracao) * adultos) + (boloPP(duracao)/2 * criancas)

  let qtdTotalSalgado = (salgadoPP(duracao) * adultos) + (salgadoPP(duracao)/2 * criancas)

  let qtdTotalBebida = (bebidaPP(duracao) * adultos) + (bebidaPP(duracao)/2 * criancas)


  resultado.innerHTML = `<P> ${Matc.ceil(qtdTotalBolo/1000)} kg de bolo</P>`;

  resultado.innerHTML += `<P> ${Matc.ceil(qtdTotalSalgado/100)} de centos de salgado </P>`;

  resultado.innerHTML += `<P> ${Matc.ceil(qtdTotalBebida/2000)} garrafas de bebida (2L) </P>`;
}

function boloPP(duracao){
  if (duracao >= 6){
    return 500;
  } else {
    return 300;
  }
}

function salgadoPP(){
  if (duracao >= 6){
    return 50;
  } else {
    return 30;
  }
}

function bebidaPP(){
  if (duracao >= 6){
    return 1500;
  } else {
    return 1000;
  }
}