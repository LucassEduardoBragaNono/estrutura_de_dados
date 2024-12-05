//Gerenciar timeline de usuarios

class No {
    constructor(valor) {
      this.valor = valor;
      this.anterior = null;  // Referência para o nó anterior
      this.proximo = null;   // Referência para o próximo nó
    }
  }
  
  class GerenciarTimelineUsuario {
    constructor() {
      this.cabeca = null;  // O primeiro nó da lista
      this.tail = null;    // O último nó da lista
    }
  
    // Adicionar um nó no final da lista
    adicionar(valor) {
      const novoNo = new No(valor);
      
      if (this.tail === null) {
        this.cabeca = this.tail = novoNo;
      } else {
        this.tail.proximo = novoNo;
        novoNo.anterior = this.tail;
        this.tail = novoNo;
      }
    }

    // Exibir a lista mais recente
    exibir() {
        let noAtual = this.cabeca;
        while (noAtual !== null) {
          console.log(noAtual.valor);
          noAtual = noAtual.proximo;
        }
      }

    // Exibir a lista mais antiga
    exibirAntiga() {
        let noAtual = this.tail;
        while (noAtual !== null) {
          console.log(noAtual.valor);
          noAtual = noAtual.anterior;
        }
      }
  }

  const lista = new GerenciarTimelineUsuario();

    console.log("Mensagens mais recentes");
    lista.adicionar("Olá - 1"); //Adicionando as mensagens dos usuarios
    lista.adicionar("Bom dia - 2");
    lista.adicionar("Tudo bem - 3");

    lista.exibir(); //Exibindo as mensagens dos usuarios atuais
    console.log("----------------------");
    console.log("Mensagens mais antigas");
    lista.exibirAntiga(); //Exibindo as mensagens mais antigas

