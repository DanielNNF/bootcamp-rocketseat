//Vetores e objetos
//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

//As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:
//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

//{ nome: 'C++', especialidade: 'Desktop' }
//{ nome: 'Python', especialidade: 'Data Science' }
//{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
//Por exemplo:

const programador = {
  nome: "Carlos",
  idade: 32,
  tecnologias:  [
      { nome: 'C++', especialidade: 'Desktop'  }, 
      { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)






