class Node {
    constructor(value) {
      this.value = value;  // Valor do nó
      this.left = null;     // Filho à esquerda
      this.right = null;    // Filho à direita
    }
  }
  
  // Definindo a árvore binária
  class BuscarMsgArmazenadas {
    constructor() {
      this.root = null;  
    }
  
    inserirMensagem(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }

    _insertNode(node, newNode) { // função auxiliar para inserir o nó na posição correta
        if (newNode.value < node.value) {
          if (node.left === null) { // se o valor do novo nó for < ou =, vai para a esquerda
            node.left = newNode;
          } else {
            this._insertNode(node.left, newNode);
          }
        } else {
          if (node.right === null) { // se o valor do novo nó for > ou =, vai para a direita
            node.right = newNode;
          } else {
            this._insertNode(node.right, newNode);
          }
        }
      }

    buscar(value) { //buscar um valor na árvore binária
        return this._buscarNode(this.root, value);
    }
     
    _buscarNode(node, value) { //metodo auxiliar para buscar um valor na árvore binária
        if (node === null) {
          return null;
        }
        if (value === node.value) {
          return node;
        }
        if (value < node.value) {
          return this._buscarNode(node.left, value);
        } else {
          return this._buscarNode(node.right, value);
        }
      }

}

//vish tiagao nao soube botar o array com as mensagens de cada id
const busca = new BuscarMsgArmazenadas();
const msg = new Map();

busca.inserirMensagem(10, ["Mensagem"]); //ID do usuario
busca.inserirMensagem(200);
busca.inserirMensagem(3);
console.log("-----------------------");
console.log("Mensagens armazenadas");
console.log(busca.buscar(10) ? "Mensagem encontrada" : "Mensagem não encontrada");
