const cliente = {
  nome:"Andre",
  idade: 36,
  cpf:12543652266,
  email:"andre@gmail.com",
  fones:["5591235498", "5521988743127"]
}

cliente.dependentes = {
  nome: "Sara",
  parentesco: "filha",
  dataNascimento: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Valentina"
cliente.dependentes.parentesco = "Filha Primogênito"

console.log(cliente)