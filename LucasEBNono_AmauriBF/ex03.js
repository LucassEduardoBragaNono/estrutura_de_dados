//Lucas Eduardo Braga Nono e Amauri Barbieri Filho

class Fila{
    constructor(){
        this.itens = {};
        this.inicio = 0; //iniciamos com o valor 0, vazio
        this.fim = 0; //iniciamos com o valor 0, vazio
    }

    enqueue(elemento){
        this.itens[this.fim] = elemento; //aqui é o push, e adicionamos o elemento no fim
        this.fim++; //incrementamos o fim
    }

    dequeue(){
        if (this.isEmpty()){
            return undefined; //se a fila estiver vazia, retornamos undefined
        }

        const primeiro = this.itens[this.inicio]; //usamos const e nao let, e pegamos o primeiro elemento 
        delete this.itens[this.inicio]; //deletamos o primeiro elemento 
        this.inicio++; //incrementamos o inicio

        if(this.inicio === this.fim){ //se o inicio for igual ao fim, a fila está vazia
            this.inicio = 0; //entao resetamos o inicio
            this.fim = 0; //e o fim
        }

        return primeiro; //retornamos o primeiro elemento
    }

    isEmpty(){
        return this.inicio === this.fim; //se o inicio estiver igual ao fim, a fila estará vazia
    }
    
    peek(){
        if(this.isEmpty()){
            return undefined; //faltou colocar se a fila estiver vazia, retornamos undefined
        }
        return this.itens[this.inicio]; //retornamos o primeiro elemento
    }
}

let fila = new Fila();
fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");
console.log(fila.dequeue()); //retorna A
console.log(fila.peek()); //retorna B