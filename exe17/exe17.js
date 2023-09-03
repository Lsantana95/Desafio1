//17 - Remova uma propriedade desse objeto.

const pessoa = {
    nome: "Leonardo",
    idade: 28,
    interesses: ["gosto de estudar programação", "assistir filmes de ação", "gosto de futebol"]
};

delete pessoa.idade;
console.log(pessoa);