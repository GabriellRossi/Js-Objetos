const clientes = [
  {
    nome:"Andre",
    idade:36,
    dependentes: [{
      nome:"Sara",
      parentesco:"Filha",
      dataNascimento:"20/03/2011"
    },
    {
      nome:"Samia",
      parentesco:"Filha",
      dataNascimento:"04/01/2014"
    }],
  },
  {
    nome: "Juliana",
    cpf: 34567802113,
    dependentes: [{
      nome: "Sophia",
      parentesco: "Filha",
      dataNascimento: "30/08/2020"
    }],
  }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)
console.table(listaDependentes)