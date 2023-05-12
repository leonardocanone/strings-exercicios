// # Exercício 1
// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3

// Você deve usar apenas um `console.log()` para isso

let seuNome = prompt("Qual é o seu nome?")
let comida1 = prompt("Qual sua comida favorita?")
let comida2 = prompt("Diga outra comida favorita")
let comida3 = prompt("Diga mais uma comida favorita")

console.log(`Estas são as comidas favoritas de ${seuNome}: \n1ª: ${comida1} \n2ª: ${comida2} \n3ª: ${comida3}`);
