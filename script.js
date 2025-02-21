function Endereco(rua, numero, cidade, estado){
    this.rua = rua 
    this.numero = numero
    this.cidade = cidade
    this.estado = estado
    this.pegarRua = function() {
        return this.rua;
    }
    this.pegarRuaBaixa = function() {
        return (this.rua).toLowerCase();
    }
    this.pegarRuaAlta = function() {
        return (this.rua).toUpperCase();
    }
    this.definirRua = function(novaRua) {
        this.rua = novaRua;
    }
    this.pegarNumero = function() {
        return this.numero;
    }
    this.definirNumero = function(novoNumero) {
        this.numero = novoNumero;
    }
    this.pegarCidade = function() {
        return this.cidade;
    }
    this.pegarCidadeAlta = function() {
        return (this.cidade).toUpperCase();
    }
    this.pegarCidadeBaixa = function() {
        return (this.cidade).toLowerCase();
    }
    this.definirCidade = function(novaCidade) {
        this.cidade = novaCidade;
    }
    this.pegarEstado = function() {
        return this.estado;
    }
    this.pegarEstadoAlta = function() {
        return (this.estado).toUpperCase();
    }
    this.pegarEstadoBaixa = function() {
        return (this.estado).toLowerCase();
    }
    this.definirEstado = function(novoEstado) {
        this.estado = novoEstado;
    }
}

function TelefoneCelular(ddd, numero){
    this.ddd = ddd
    this.numero = numero
    this.pegarDdd = function() {
        return this.ddd;
    }
    this.definirDdd = function(novoDdd) {
        this.ddd = novoDdd;
    }
    this.pegarNumero = function() {
        return this.numero;
    }
    this.definirNumero = function(novoNumero) {
        this.numero = novoNumero;
    }

}

function Cliente(nome, telefoneCelular = new TelefoneCelular(), email, endereco = new Endereco()){
    this.nome = nome,
    this.telefoneCelular = telefoneCelular,
    this.email = email,
    this.endereco = endereco,
    this.pegarNome = function () {
        return this.nome;
    },
    this.pegarNomeBaixa = function () {
        return (this.nome).toLowerCase();
    },
    this.pegarNomeAlta = function () {
        return (this.nome).toUpperCase();
    },
    this.definirNome = function (novoNome) {
        this.nome = novoNome;
    }
    this.pegarTelefone = function() {
        return this.telefoneCelular;
    }
    this.definirTelefone = function(novoTelefone) {
        this.telefoneCelular = novoTelefone;
    }
    this.pegarEmail = function() {
        return this.email;
    }
    this.pegarEmailBaixa = function() {
        return (this.email).toLowerCase();
    }
    this.pegarEmailAlta = function() {
        return (this.email).toUpperCase();
    }
    this.definirEmail = function(novoEmail){
        this.email = novoEmail;
    }
    this.pegarEndereco = function() {
        return this.endereco;
    }
    this.pegarEnderecoBaixa = function() {
        return (this.endereco).toLowerCase();
    }
    this.pegarEnderecoAlta = function() {
        return (this.endereco).toUpperCase();
    }
    this.definirEndereco = function(novoEndereco) {
        this.endereco = novoEndereco;
    }
    this.descricao = function() {
        return `---------------\nInformações do Cliente:\n${this.pegarNome()}\n---------------\n---------------\nTelefone:\nDDD: ${this.telefoneCelular.pegarDdd()}\nNúmero: ${this.telefoneCelular.pegarNumero()}\n---------------\nEndereço:\nRua: ${this.endereco.pegarRua()}\nNúmero: ${this.endereco.pegarNumero()}\nCidade: ${this.endereco.pegarCidade()}\nEstado: ${this.endereco.pegarEstadoAlta()}\n---------------`
    }
}

let telefone1 = new TelefoneCelular(12, 993827890)
let endereco1 = new Endereco('Av. Paulista', 210, 'São Paulo', 'SP')
let cliente1 = new Cliente('Mariana', telefone1, 'mariana.souza@gmail.com', endereco1)
let telefone2 = new TelefoneCelular(67, 911287235)
let endereco2 = new Endereco('Uberlândia', 372, 'São José dos Campos', 'sp')
let cliente2 = new Cliente('José', telefone2, 'jose35@gmail.com', endereco2)
let telefone3 = new TelefoneCelular(34, 981136987)
let endereco3 = new Endereco("Rio de Janeiro", 500, "Copacabana", "rj")
let cliente3 = new Cliente('Catarina', telefone3, 'catarinasoares2003@gmail.com', endereco3)
let telefone4 = new TelefoneCelular(98, 900349765)
let endereco4 = new Endereco("Belo Horizonte", 120, "Centro", "MG")
let cliente4 = new Cliente('Otávio', telefone4, 'otavio@gmail.com', endereco4)

var clientes = [cliente1, cliente2, cliente3, cliente4]

function ordenarClientes(array) {
    return array.sort((a, b) => a.pegarNomeBaixa().localeCompare(b.pegarNomeBaixa())); 
}

clientes = ordenarClientes(clientes)
for (let i = 0; i < clientes.length; i++)
    console.log(clientes[i]. descricao())
