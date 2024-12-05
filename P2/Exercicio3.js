class AmizadeUsuarios {
    constructor() {
      this.grafo = new Map(); // Utilizando Map() para armazenar os usuarios e suas amizades
    }
  
    // Adicionando um nó ao grafo
    addUsuario(no) {
      if (!this.grafo.has(no)) {
        this.grafo.set(no, []); //se o nó nao existir crio um nó com uma lista vazia de vizinhos
      }
    }
  
    // Adicionando uma aresta (conexão entre dois nós, amizade dos usuarios)
    amizade(no1, no2) {
      if (!this.grafo.has(no1)) {
        this.addUsuario(no1);
      }
      if (!this.grafo.has(no2)) {
        this.addUsuario(no2);
      }
      
      // Adicionando a conexão de no1 a no2 e de no2 a no1 (grafo não direcionado)
      this.grafo.get(no1).push(no2);
      this.grafo.get(no2).push(no1);
    }

    exibirAmizadeEspecifica(no) {
        console.log(`${no} possui amizade com ${this.grafo.get(no).join(', ')}`); //procurando as amizades de um usuario especifico
    }
}

const amigos = new AmizadeUsuarios();

amigos.amizade("Joao", "Lucas");
amigos.amizade("Lucas", "Maria");
amigos.amizade("Maria", "Joao");

console.log("Amizades dos usuarios");
amigos.exibirAmizadeEspecifica("Joao");