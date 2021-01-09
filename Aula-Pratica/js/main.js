var nome = "Danilson Sanches";
var n1 = 29;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + n1 + " anos");

//operações com string
console.log(nome + " tem " + n1 + " anos");
console.log(frase.replace("Japão", "Cabo Verde")); //usar string.replace para substituir palavras
console.log(frase.toLowerCase()); //passar para letras minusculas
console.log(frase.toUpperCase()); //passar para letras maiusculas

//operações aritmeticas
console.log("\n--- OPERAÇÕES ARITMETICAS ---");
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);

//ARRAYS ou LISTA
console.log("\n--- ARRAYS ou LISTA ---");
var lista = ["maça", "pera", "laranja"];
lista.push("banana"); //inserir elemento na lista
console.log(lista); //lista completa
lista.pop(); //remove o ultimo da lista
console.log(lista); //lista completa
console.log(lista[0]); //primeiro elemento da lista começa na posiçao 0
console.log(lista[2]); //terceiro elemento da lista começa na posiçao (3 - 1 => 2)
console.log(lista.length); //tamanho da lista
console.log(lista.join(" - ")); //trocar virgula por -
console.log(lista.reverse()); //imprimir a lista revertida

//dicionario
console.log("\n--- DICIONARIO ---"); //formato json
var fruta = { nome: "BMW", cor: "vermelha" };
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

//lista de dicionarios
console.log("\n--- LISTA de DICIONARIOS ---"); //formato json
var frutas = [
  { nome: "BMW", cor: "vermelha" },
  { nome: "MERCEDES", cor: "preta" },
  { nome: "NISSAN C4", cor: "amarelo" },
  { nome: "FERRARI", cor: "vermelha" },
];
console.log(frutas);
console.log(frutas[3].nome);
console.log(frutas[3].cor);

//condicionais com if-else if-else
console.log("\n--- CONDICIONAIS ---");
//var idade = prompt("Qual a sua idade?"); //inserir texto para questoes e inserção de dados
var idade = 18; //inserir texto para questoes e inserção de dados
if (idade >= 18) {
  //alert("maior de idade");
  console.log("maior de idade");
} else {
  // alert("menor de idade");
  console.log("menor de idade");
}

//laços de repetição com for, while
console.log("\n--- LAÇOS DE REPETIÇÃO - while ---");
var count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}

//laços de repetição com for, while
console.log("\n--- LAÇOS DE REPETIÇÃO - for ---");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//data em javascript
console.log("\n--- DATE EM JAVASCRIPT ---");
var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getMonth() + 1);
console.log(d.getHours());
console.log(d.getMinutes());
