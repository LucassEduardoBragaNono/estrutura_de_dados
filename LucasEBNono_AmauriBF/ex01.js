//Lucas Eduardo Braga Nono e Amauri Barbieri Filho


class Pilha {
    constructor() {
        this.itens = [];
        this.tamanho = 0; // aqui faltou mantermos o controle do tamanho da pilha
    }


    push(elemento) {
        this.itens[this.tamanho] = elemento;
        this.tamanho++;  //aqui faltou incrementarmos o tamanho da pilha
    }

    pop() {
        if(this.itens.tamanho === 0) { //faltou um = para ser identico
        // return "Pilha vazia";
        return undefined; //corrigindo o retorno para undefined 

        }
        const topo = this.itens[this.tamanho - 1]; //mudamos de let para const e colocamos o tamanho
        delete this.itens[this.tamanho - 1]; //tamanho dnv
        this.tamanho--; //aqui decrementamos o tamanho 

        return topo; //retornando o ultimo item
    }

    peek() {
        if(this.tamanho === 0){
            return undefined; //faltou ver se a pilha está vazia, ai retornamos undefined
        }
        return this.itens[this.tamanho - 1]; //aqui usamos o tamanho
    }
}

let pilha = new Pilha();
pilha.push(1);
pilha.push(2);
console.log(pilha.pop()) //retorna 2
console.log(pilha.peek()) //retorna 1