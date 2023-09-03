//08 - crie uma função que  verifique se uma  variável é true ou false

function verificarSeVerdadeiroOuFalso(variavel) {
    if (variavel === true) {
      console.log("A variável é verdadeira");
    } else if (variavel === false) {
      console.log("A variável é falsa");
    } else {
      console.log("A variável não é verdadeira nem falsa");
    }
}
verificarSeVerdadeiroOuFalso(true); 
verificarSeVerdadeiroOuFalso(false); 
verificarSeVerdadeiroOuFalso("Olá");
