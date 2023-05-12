// # Exercício 2 - Observe a string abaixo:

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// A partir dela, execute os passos abaixo:

console.log(`String original: "Eu não sou supersticioso, mas sou um pouco ________.      "`)

// a) **Remova** o excesso de espaços no final da string;

let novaString = minhaString.trim()
console.log("a)",novaString);

// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

console.log("b) Antes:",minhaString.length,"caracteres.");
console.log("b) Depois:",novaString.length,"caracteres.");

// c) **Substitua** os traços `________` por “sticioso”.

console.log("c)",novaString.replace("________","sticioso"));