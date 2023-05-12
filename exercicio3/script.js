// //Crie a const para a frase aqui
// # Exercício 3 - A partir da frase a seguir, faça o que se pede.

// "Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

const casaDoJorge = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log("a)",casaDoJorge);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

let novaString = casaDoJorge.replace("verde","rosa").replace("azul","laranja")
console.log("b)",novaString);

// c) **Verifique** se a nova string inclui **rosa**, e se inclui **laranja**.

// console.log(novaString.includes("rosa" && "laranja")) - esse jeito de testar a lógica estava dando errado, não dava erro no console, mas não estava aderente às regras da tabela-verdade. Já com a sintaxe abaixo, aí sim ficou 100% aderente à tabela.  
console.log("c)",(novaString.includes("rosa")) && (novaString.includes("laranja"))) 

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

console.log("d)",novaString.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"));

// inicialmente eu havia resolvido o exercício extra com o replace no console.log acima, mas há também a possibilidade de fazer conforme o console.log abaixo, no entanto é preciso copiar ou escrever a frase novamente, e a solução dada foi através do formato Template String. O problema desse método abaixo no meu modo de ver é que reescrever a frase acaba sendo um processo muito manual, onde não podemos aproveitar as variáveis que já estavam criadas ao longo do exercício, como de certa forma fizemos pelo método do replace.
console.log(`d) Jorge tem uma casa rosa e com portão laranja, com os dizeres: ${`"BOAS VINDAS, mas não deixe o gato sair"`.toUpperCase()}`)