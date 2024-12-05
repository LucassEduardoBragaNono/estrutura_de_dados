const usuarios = []; 
const interesses = new Map();
const conexoes = new Map();
const mensagens = new Map();

adicionarUsuario("Usuario1", ["Biologia", "Esquisofrenia"], ["Usuario3"], ["Babui babu"]);
adicionarUsuario("Usuario2", ["Esportes", "Academia"], ["Usuario1"], ["Treininho de peito hj pae"]); 
adicionarUsuario("Usuario3", ["Cinema", "Filmes"], ["Usuario3", "Usuario2"], ["Filme pika"]); 

//funcao para simulacao de operacoes
function adicionarUsuario(nomeUsuario, interessesUsuario, conexoesUsuario, mensagensUsuario) {
    usuarios.push(nomeUsuario);
    interesses.set(nomeUsuario, interessesUsuario);
    conexoes.set(nomeUsuario, conexoesUsuario);
    mensagens.set(nomeUsuario, mensagensUsuario);
}

function exibirInteresses(){ //exibindo os interesses de um usuario
    for (const usuario of usuarios) {
        const interessesUsuario = interesses.get(usuario);
        console.log(`Interesses de ${usuario}: ${interessesUsuario.join(", ")}`);
    }
}

function exibirMensagens(){ //mesma coisa do anterior, porém agora são mensagens
    for (const usuario of usuarios){
        const mensagensUsuario = mensagens.get(usuario);
        console.log(`Mensagens de ${usuario}: ${mensagensUsuario.join(", ")}`);
    }
}

function exibirMensagensEspecificas(nomeUsuario){ //exibindo as mensagens de um usuario especifico, passando o nome do usuario como parametro
    const mensagensUsuario = mensagens.get(nomeUsuario);
    console.log(`Mensagens de ${nomeUsuario}: ${mensagensUsuario.join(", ")}`);
}

function exibirConexoes(){ //exibindo as conexoes de todos os usuarios
    for (const usuario of usuarios){
        const conexoesUsuario = conexoes.get(usuario);
        console.log(`Conexoes de ${usuario}: ${conexoesUsuario.join(", ")}`);
    }
}

function aplicandoTudo(){ //aplicando todas as funcoes
    exibirInteresses();
    exibirMensagens();
    exibirMensagensEspecificas("Usuario1");
    exibirConexoes();
}

aplicandoTudo(); //executando
