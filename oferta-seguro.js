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



function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj)
  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para: ${obj.nome}`);
  }  
}

oferecerSeguro(cliente)

// console.log(Object.values(cliente))
// console.log(Object.entries(cliente))


/*
  Object.entries() retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto. A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente.
*/

/*
  Object.values() retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto. A ordem das propriedades é a mesma que a dada pelo laço sobre os valores da propriedade do objeto manualmente.
*/