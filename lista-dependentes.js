const cliente = {
  nome:"Andre",
  idade:36,
  cpf:12543652266,
  email:"andre@gmail.com",
  fones:["5591235498", "5521988743127"],
  dependentes: [{
    nome:"Sara Silva",
    parentesco:"Filha",
    dataNascimento:"20/03/2011"
  }]
}

cliente.dependentes.push({
  nome:"Samia Maria",
  parentesco:"Sobrinha",
  dataNascimento:"04/01/2014"
})

console.log(cliente)

const filhaMaisVelha = cliente.dependentes.filter(dependente => dependente.dataNascimento==="04/01/2014")

console.log(filhaMaisVelha)
console.log(filhaMaisVelha[0].nome)