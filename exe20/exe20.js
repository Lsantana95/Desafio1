//20 - Mostre no console o nome de um amigo de cada lista.

const cadastro = [
    {
      nome: "João",
      idade: 25,
      telefone: "11 9999-9999",
      amigos: ["Maria", "José", "Pedro", "Ana"]
    },
    {
      nome: "Maria",
      idade: 23,
      telefone: "11 8888-8888",
      amigos: ["João", "José", "Pedro", "Ana"]
    },
    {
      nome: "José",
      idade: 27,
      telefone: "11 7777-7777",
      amigos: ["João", "Maria", "Pedro", "Ana"]
    },
    {
      nome: "Pedro",
      idade: 29,
      telefone: "11 6666-6666",
      amigos: ["João", "Maria", "José", "Ana"]
    },
    {
      nome: "Ana",
      idade: 31,
      telefone: "11 5555-5555",
      amigos: ["João", "Maria", "José", "Pedro"]
    }
];

console.log(cadastro[2].amigos[3]);
console.log(cadastro[2].amigos[1]); 
console.log(cadastro[3].amigos[2]); 
console.log(cadastro[1].amigos[2]); 
console.log(cadastro[2].amigos[0]); 