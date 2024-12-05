//P2 - Estrutura de Dados
//Data 05/12/2024
//Lucas Eduardo Braga Nono, sem dupla.


class No {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;  // Referência para o próximo nó
    }
  }
  
  class InterressesUsuario {
    constructor() {
      this.cabeca = null; // O primeiro nó da lista
    }
  
    adicionar(valor) { // Adicionar um nó no final da lista
      const novoNo = new No(valor);
      
      if (this.cabeca === null) {
        this.cabeca = novoNo;
      } else {
        let noAtual = this.cabeca;
        while (noAtual.proximo !== null) {
          noAtual = noAtual.proximo;
        }
        noAtual.proximo = novoNo;
      }
    }

    exibir() { // Exibir a lista
        let noAtual = this.cabeca;
        while (noAtual !== null) {
          console.log(noAtual.valor);
          noAtual = noAtual.proximo;
        }
      }
  }

  // implementação da lista encadeada
    const lista = new InterressesUsuario();

    lista.adicionar("Cinema"); //Adicionando interesses do usuario
    lista.adicionar("Música");
    lista.adicionar("Esportes");

    lista.exibir(); //Exibindo todos os interesses do usuario que estão na lista encadeada