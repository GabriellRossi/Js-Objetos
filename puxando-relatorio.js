const cliente = {
  nome:"Andre",
  idade:36,
  cpf:12543652266,
  email:"andre@gmail.com",
  fones:["5591235498", "5521988743127"],
  dependentes: [
    {
      nome:"Sara Silva",
      parentesco:"Filha",
      dataNascimento:"20/03/2011"
    },

    {
      nome:"Samia Maria",
      parentesco:"Filha",
      dataNascimento:"04/01/2014"
    }
  ],
  saldo:100,

  depositar:function(valor) {
    this.saldo += valor
  }
}

let relatorio = "";

for(let info in cliente) {
  if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
    continue
  } else {
    relatorio += `
    ${info} ==> ${cliente[info]}
    `
  }
}

console.log(relatorio)