//18 - Mostre no console todas as propriedades desse objeto.

const pessoa = {
    nome: "Leonardo",
    idade: 28,
    interesses: ["gosto de estudar programação", "assistir filmes de ação", "gosto de futebol"]
  };
  
const propriedades = Object.keys(pessoa);
  console.log(propriedades);