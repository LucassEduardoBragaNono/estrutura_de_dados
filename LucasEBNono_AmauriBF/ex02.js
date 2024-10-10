//Lucas Eduardo Braga Nono e Amauri Barbieri Filho

class FilaAtendimentos {
    constructor() {
        this.fila = {}; //aqui criamos a fila
        this.tamanhoFila = 0; //aqui para gerenciar o tamanho da fila
    }

    adicionarPaciente(nome, gravidade){ //adicionar paciente com nome e gravidade
        let situacao = {
            nome_paciente: nome, //nome
            gravidade_nivel: gravidade, //gravidade
        };

        let indice = 0; //iniciamos o indice com 0
        while (indice < this.tamanhoFila && this.fila[indice].gravidade_nivel >= gravidade) { // enquanto o indice for menor que a gravidade ele vai adicionar e repetir
            indice++;
        }

        for (let i = this.tamanhoFila; i > indice; i--) { // i vai ser igual ao tamanho da fila, e enquanto i for maior que o indice ele vai decrementar
            this.fila[i] = this.fila[i - 1]; 
        }

        this.fila[indice] = situacao; //adicionamos um paciente e o seu indice vai ser de acordo com a maior gravidade
        this.tamanhoFila++; //incrementamos ele na fila
    }


    atenderPaciente(){
        if(this.tamanhoFila === 0){ //se a fila nao houver ninguem, entao nao haverá ninguem para ser atendido
            console.log("Ninguém na fila para ser atendido.");
            return undefined;
        }

        let pacienteAtendido = this.fila[0];
        for (let i = 0; i < this.tamanhoFila - 1; i++) { //enquanto i for menor que o tamanho da fila - 1, ele vai incrementar
            this.fila[i] = this.fila[i + 1];
        }
        delete this.fila[this.tamanhoFila - 1]; //atendemos o primeiro da fila e deletamos ele
        this.tamanhoFila--; //reduzimos o tamanho da fila

        return pacienteAtendido;
    }       
    listarPacientes(){
        console.log(`Pacientes na fila: ${this.tamanhoFila}`); //quantidade de pacientes na fila
        for (let j = 0; j < this.tamanhoFila; j++) { //repetindo até acabar a fila
            console.log(`${this.fila[j].nome_paciente} - Gravidade: ${this.fila[j].gravidade_nivel}`); //listamos os pacientes e a gravidade deles em ordem do mais grave para o menos grave
        }
        return this.tamanhoFila; //retornando
    }

    estaVazia() {
        for (let i = 0; i < this.tamanhoFila; i++) {
          if (this.fila[i] == 0) {
            return true;
          }
        }
        return false;
      } // se nao houver ninguem na fila retornara true e se estiver vazia retornara
}

let pacientes = new FilaAtendimentos();
pacientes.adicionarPaciente("Joao", 1);
pacientes.adicionarPaciente("José", 3);
pacientes.adicionarPaciente("Marquinhos", 100);
console.log(pacientes.listarPacientes());
console.log(pacientes.atenderPaciente());
console.log(pacientes.estaVazia());
console.log(pacientes.listarPacientes());
