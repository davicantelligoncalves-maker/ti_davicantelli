// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.
// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.

//    resposta:       let visto = false;

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5
//   "5" === 5
//   "5" == 5
//   true === false

//      resposta:   a) True b) False c) True d) False 

// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
//       // ...
//     });
//   });

//  resposta: A variável let apoiado = false; foi declarada fora do forEach. Isso faz com que exista apenas uma variável compartilhada por todos os cartões. Quando você clica em um botão, ele altera o estado dessa única variável, fazendo com que os outros cartões achem que também já foram apoiados.
// correção:
//    document.querySelectorAll(".apoiar").forEach(function(botao) {
//  let apoiado = false; 
//  botao.addEventListener("click", function() {
//  // ...
//  });
//});

// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }

//  resposta:  if (apoiado === false) {
//  botao.textContent = "Apoiado";
//} else {
//  botao.textContent = "Apoiar";
//}

// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.

//  respoata: <div class="cartao">
// <h2>Ventilador barulhento da sala 3</h2>
//  <p>O ventilador faz um ruído muito forte e atrapalha as explicações durante a aula.</p>
//  <p>Apoios: <span class="contagem">0</span></p>
//  <button class="apoiar">Apoiar</button>
//</div>

// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?

// resposta:  Para que um cartão comece já apoiado, a variável apoiado precisa iniciar com o valor true:
//Se você mudar essa linha direto na função do forEach, todos os cartões passarão a iniciar configurados como true.
